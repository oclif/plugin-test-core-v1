import {Command, Flags, Interfaces} from '@oclif/core'

type Result = {
  args: {[name: string]: unknown}
  flags: Interfaces.InferredFlags<typeof CoreV1.flags>
}

export default class CoreV1 extends Command {
  static args = [
    {
      name: 'optionalArg',
    },
    {
      name: 'defaultArg',
      default: 'simple string default',
    },
    {
      name: 'defaultFnArg',
      default: async (): Promise<string> => 'async fn default',
    },
  ]
  static enableJsonFlag = true
  static flags = {
    optionalString: Flags.string(),
    defaultString: Flags.string({
      default: 'simple string default',
    }),
    defaultFnString: Flags.string({
      default: async () => 'async fn default',
    }),
  }

  async run(): Promise<Result> {
    const {args, flags} = await this.parse(CoreV1)
    this.log(`hello I am an @oclif/core@v1 plugin from ${this.config.root}!`)
    return {args, flags}
  }
}
