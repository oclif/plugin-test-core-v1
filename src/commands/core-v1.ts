import {Command, Flags, Interfaces} from '@oclif/core'

type Result = {
  args: { [name: string]: any }
  flags: Interfaces.InferredFlags<typeof CoreV1.flags>
}

export default class CoreV1 extends Command {
  static flags = {
    optionalString: Flags.string(),
    defaultString: Flags.string({
      default: 'simple string default',
    }),
    defaultFnString: Flags.string({
      default: async () => Promise.resolve('async fn default'),
    }),
  }

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
      default: async (): Promise<string> => Promise.resolve('async fn default'),
    },
  ]

  static enableJsonFlag = true

  async run(): Promise<Result> {
    const {args, flags} = await this.parse(CoreV1)
    this.log(`hello I am an @oclif/core@v1 plugin from ${this.config.root}!`)
    return {args, flags}
  }
}
