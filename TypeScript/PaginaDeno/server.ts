import { serveDir } from "https://deno.land/std@0.207.0/http/file_server.ts";

Deno.serve((req) => {
  return serveDir(req, {
    fsRoot: "public",   // ← Serve a pasta correta
    urlRoot: "",
    showDirListing: true,
  });
});