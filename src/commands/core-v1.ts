import {Command} from '@oclif/core'

export default class CoreV1 extends Command {
  public async run(): Promise<void> {
    this.log(`hello I am an @oclif/core@v1 plugin from ${this.config.root}!`)
  }
}
