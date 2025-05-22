import { FileFetcher } from "./_lib/file-fetcher";
import { privateConfig } from "@/shared/config/private";
import { ContentParser } from "@/shared/api/content/_lib/content-parser";
import {
  DummyCacheStrategy,
  ReactQueryCacheStrategy,
} from "@/shared/api/content/_lib/cache-strategy";
import { ContentApi } from "@/shared/api/content/_content-api";

const fileFetcher = new FileFetcher(privateConfig.CONTENT_TOKEN);

const contentParser = new ContentParser();
const reactQueryCacheStrategy = new ReactQueryCacheStrategy();
const dummyCacheStrategy = new DummyCacheStrategy();

export const contentApi = new ContentApi(privateConfig.CONTENT_URL, {
  cacheStrategy:
    process.env.NODE_ENV === "development"
      ? dummyCacheStrategy
      : reactQueryCacheStrategy,
  contentParser,
  fileFetcher,
});
