import {
  defineCloudflareConfig,
  type OpenNextConfig,
} from '@opennextjs/cloudflare'

export default {
  ...defineCloudflareConfig(),

  // Не даём OpenNext ошибочно запускать bun run build
  buildCommand: 'pnpm run build',
} satisfies OpenNextConfig
