oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @oclif/plugin-test-core-v1
$ corev1 COMMAND
running command...
$ corev1 (--version)
@oclif/plugin-test-core-v1/0.0.0 darwin-arm64 node-v18.15.0
$ corev1 --help [COMMAND]
USAGE
  $ corev1 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`corev1 hello PERSON`](#corev1-hello-person)
* [`corev1 hello world`](#corev1-hello-world)
* [`corev1 help [COMMANDS]`](#corev1-help-commands)
* [`corev1 plugins`](#corev1-plugins)
* [`corev1 plugins:install PLUGIN...`](#corev1-pluginsinstall-plugin)
* [`corev1 plugins:inspect PLUGIN...`](#corev1-pluginsinspect-plugin)
* [`corev1 plugins:install PLUGIN...`](#corev1-pluginsinstall-plugin-1)
* [`corev1 plugins:link PLUGIN`](#corev1-pluginslink-plugin)
* [`corev1 plugins:uninstall PLUGIN...`](#corev1-pluginsuninstall-plugin)
* [`corev1 plugins:uninstall PLUGIN...`](#corev1-pluginsuninstall-plugin-1)
* [`corev1 plugins:uninstall PLUGIN...`](#corev1-pluginsuninstall-plugin-2)
* [`corev1 plugins update`](#corev1-plugins-update)

## `corev1 hello PERSON`

Say hello

```
USAGE
  $ corev1 hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/oclif/plugin-test-core-v1/blob/v0.0.0/dist/commands/hello/index.ts)_

## `corev1 hello world`

Say hello world

```
USAGE
  $ corev1 hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ corev1 hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/oclif/plugin-test-core-v1/blob/v0.0.0/dist/commands/hello/world.ts)_

## `corev1 help [COMMANDS]`

Display help for corev1.

```
USAGE
  $ corev1 help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for corev1.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.19/src/commands/help.ts)_

## `corev1 plugins`

List installed plugins.

```
USAGE
  $ corev1 plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ corev1 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/index.ts)_

## `corev1 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ corev1 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ corev1 plugins add

EXAMPLES
  $ corev1 plugins:install myplugin 

  $ corev1 plugins:install https://github.com/someuser/someplugin

  $ corev1 plugins:install someuser/someplugin
```

## `corev1 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ corev1 plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ corev1 plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/inspect.ts)_

## `corev1 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ corev1 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ corev1 plugins add

EXAMPLES
  $ corev1 plugins:install myplugin 

  $ corev1 plugins:install https://github.com/someuser/someplugin

  $ corev1 plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/install.ts)_

## `corev1 plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ corev1 plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ corev1 plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/link.ts)_

## `corev1 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ corev1 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ corev1 plugins unlink
  $ corev1 plugins remove
```

## `corev1 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ corev1 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ corev1 plugins unlink
  $ corev1 plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/uninstall.ts)_

## `corev1 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ corev1 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ corev1 plugins unlink
  $ corev1 plugins remove
```

## `corev1 plugins update`

Update installed plugins.

```
USAGE
  $ corev1 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/update.ts)_
<!-- commandsstop -->
