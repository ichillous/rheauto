import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the multi-page RHE Auto site", async () => {
  const expectations = [
    ["/", /Built to keep/i],
    ["/services", /Service with the price up front/i],
    ["/about", /Hughes R\./i],
    ["/contact", /Choose the way you want to connect/i],
    ["/payment", /A direct way to pay/i],
  ];

  for (const [pathname, expected] of expectations) {
    const response = await render(pathname);
    assert.equal(response.status, 200, `${pathname} should return 200`);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, expected);
    assert.match(html, /RHE AUTO/i);
    assert.match(html, /href="\/services"/i);
    assert.match(html, /href="\/about"/i);
    assert.match(html, /href="\/contact"/i);
    assert.doesNotMatch(html, /codex-preview|Building your site|Starter Project/i);
  }
});

test("publishes the requested prices, credentials, and contact actions", async () => {
  const serviceResponse = await render("/services");
  const serviceHtml = await serviceResponse.text();
  assert.match(serviceHtml, /Diagnostic/i);
  assert.match(serviceHtml, /\$215/i);
  assert.match(serviceHtml, /Service Call/i);
  assert.match(serviceHtml, /\$80/i);
  assert.match(serviceHtml, /Service Check/i);
  assert.match(serviceHtml, /\$53/i);
  assert.match(serviceHtml, /I-CAR/i);
  assert.match(serviceHtml, /Professional Technician Society/i);

  const contactResponse = await render("/contact");
  const contactHtml = await contactResponse.text();
  assert.match(contactHtml, /rheauto@gmail\.com/i);
  assert.match(contactHtml, /\(614\) 321-7743/i);
  assert.match(contactHtml, /\(614\) 493-7361/i);
  assert.match(contactHtml, /2778 Cleveland Ave/i);
  assert.match(contactHtml, /https:\/\/calendly\.com\/rheauto/i);
  assert.match(contactHtml, /https:\/\/api\.whatsapp\.com\/send\?phone=16143217743/i);
  assert.match(contactHtml, /https:\/\/www\.linkedin\.com\/in\/rhe-auto-632a001b9/i);
  assert.match(contactHtml, /https:\/\/www\.facebook\.com\/rheauto/i);
});

test("payment page uses the official PayPal destination and social metadata", async () => {
  const response = await render("/payment");
  const html = await response.text();
  assert.match(html, /https:\/\/www\.paypal\.me\/hughesroc/i);
  assert.match(html, /PayPal processes the transaction/i);

  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  assert.match(layout, /metadataBase: new URL\(site\.url\)/);
  assert.match(layout, /\/og\.png/);
  assert.match(layout, /application\/ld\+json/);
});
