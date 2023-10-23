
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const SESSION_MANAGER: string;
	export const ZPLUG_ROOT: string;
	export const USER_ZDOTDIR: string;
	export const __ETC_PROFILE_DONE: string;
	export const QT_SCREEN_SCALE_FACTORS: string;
	export const __HM_SESS_VARS_SOURCED: string;
	export const COLORTERM: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_SESSION_PATH: string;
	export const TERM_PROGRAM_VERSION: string;
	export const _ZPLUG_VERSION: string;
	export const FPATH: string;
	export const NODE: string;
	export const ZPLUG_CACHE_DIR: string;
	export const LC_ADDRESS: string;
	export const _ZPLUG_PREZTO: string;
	export const LC_NAME: string;
	export const XCURSOR_PATH: string;
	export const LOCALE_ARCHIVE_2_27: string;
	export const npm_config_local_prefix: string;
	export const _ZPLUG_AWKPATH: string;
	export const ZPLUG_THREADS: string;
	export const ZPLUG_FILTER: string;
	export const DESKTOP_SESSION: string;
	export const LC_MONETARY: string;
	export const GTK_RC_FILES: string;
	export const NO_AT_BRIDGE: string;
	export const XCURSOR_SIZE: string;
	export const EDITOR: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const NIX_PROFILES: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const _ZPLUG_URL: string;
	export const NIX_PATH: string;
	export const SYSTEMD_EXEC_PID: string;
	export const NIXPKGS_CONFIG: string;
	export const _: string;
	export const XAUTHORITY: string;
	export const _ZPLUG_OHMYZSH: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const PERIOD: string;
	export const VSCODE_INJECTION: string;
	export const GTK2_RC_FILES: string;
	export const HOME: string;
	export const SSH_ASKPASS: string;
	export const LANG: string;
	export const LC_PAPER: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const STARSHIP_SHELL: string;
	export const GIO_EXTRA_MODULES: string;
	export const GIT_ASKPASS: string;
	export const XDG_SEAT_PATH: string;
	export const INVOCATION_ID: string;
	export const MANAGERPID: string;
	export const CHROME_DESKTOP: string;
	export const GTK_A11Y: string;
	export const STARSHIP_SESSION_KEY: string;
	export const KDE_SESSION_UID: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const INFOPATH: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const LC_IDENTIFICATION: string;
	export const npm_package_name: string;
	export const XDG_DESKTOP_PORTAL_DIR: string;
	export const GTK_PATH: string;
	export const ZDOTDIR: string;
	export const LESSOPEN: string;
	export const USER: string;
	export const ZPLUG_BIN: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const ZPLUG_PROTOCOL: string;
	export const TZDIR: string;
	export const KDE_SESSION_VERSION: string;
	export const ZPLUG_USE_CACHE: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const ZPLUG_HOME: string;
	export const PAGER: string;
	export const __HM_ZSH_SESS_VARS_SOURCED: string;
	export const LC_TELEPHONE: string;
	export const QTWEBKIT_PLUGIN_PATH: string;
	export const LC_MEASUREMENT: string;
	export const __NIXOS_SET_ENVIRONMENT_DONE: string;
	export const XDG_VTNR: string;
	export const ZPLUG_REPOS: string;
	export const XDG_SESSION_ID: string;
	export const LOCALE_ARCHIVE: string;
	export const LESSKEYIN_SYSTEM: string;
	export const npm_config_user_agent: string;
	export const ZPLUG_LOADFILE: string;
	export const QML2_IMPORT_PATH: string;
	export const TERMINFO_DIRS: string;
	export const npm_execpath: string;
	export const MOZ_PLUGIN_PATH: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_package_json: string;
	export const LC_TIME: string;
	export const _ZPLUG_CONFIG_SUBSHELL: string;
	export const KDEDIRS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const NIXOS_XDG_OPEN_USE_PORTAL: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const JOURNAL_STREAM: string;
	export const XCURSOR_THEME: string;
	export const XDG_DATA_DIRS: string;
	export const GDK_BACKEND: string;
	export const KDE_FULL_SESSION: string;
	export const LIBEXEC_PATH: string;
	export const PATH: string;
	export const ZPLUG_ERROR_LOG: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const KDE_APPLICATIONS_AS_SCOPE: string;
	export const KPACKAGE_DEP_RESOLVERS_PATH: string;
	export const QT_PLUGIN_PATH: string;
	export const npm_node_execpath: string;
	export const LC_NUMERIC: string;
	export const OLDPWD: string;
	export const TERM_PROGRAM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		SESSION_MANAGER: string;
		ZPLUG_ROOT: string;
		USER_ZDOTDIR: string;
		__ETC_PROFILE_DONE: string;
		QT_SCREEN_SCALE_FACTORS: string;
		__HM_SESS_VARS_SOURCED: string;
		COLORTERM: string;
		XDG_CONFIG_DIRS: string;
		XDG_SESSION_PATH: string;
		TERM_PROGRAM_VERSION: string;
		_ZPLUG_VERSION: string;
		FPATH: string;
		NODE: string;
		ZPLUG_CACHE_DIR: string;
		LC_ADDRESS: string;
		_ZPLUG_PREZTO: string;
		LC_NAME: string;
		XCURSOR_PATH: string;
		LOCALE_ARCHIVE_2_27: string;
		npm_config_local_prefix: string;
		_ZPLUG_AWKPATH: string;
		ZPLUG_THREADS: string;
		ZPLUG_FILTER: string;
		DESKTOP_SESSION: string;
		LC_MONETARY: string;
		GTK_RC_FILES: string;
		NO_AT_BRIDGE: string;
		XCURSOR_SIZE: string;
		EDITOR: string;
		XDG_SEAT: string;
		PWD: string;
		NIX_PROFILES: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		_ZPLUG_URL: string;
		NIX_PATH: string;
		SYSTEMD_EXEC_PID: string;
		NIXPKGS_CONFIG: string;
		_: string;
		XAUTHORITY: string;
		_ZPLUG_OHMYZSH: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		PERIOD: string;
		VSCODE_INJECTION: string;
		GTK2_RC_FILES: string;
		HOME: string;
		SSH_ASKPASS: string;
		LANG: string;
		LC_PAPER: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		STARSHIP_SHELL: string;
		GIO_EXTRA_MODULES: string;
		GIT_ASKPASS: string;
		XDG_SEAT_PATH: string;
		INVOCATION_ID: string;
		MANAGERPID: string;
		CHROME_DESKTOP: string;
		GTK_A11Y: string;
		STARSHIP_SESSION_KEY: string;
		KDE_SESSION_UID: string;
		NIX_USER_PROFILE_DIR: string;
		INFOPATH: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		LC_IDENTIFICATION: string;
		npm_package_name: string;
		XDG_DESKTOP_PORTAL_DIR: string;
		GTK_PATH: string;
		ZDOTDIR: string;
		LESSOPEN: string;
		USER: string;
		ZPLUG_BIN: string;
		VSCODE_GIT_IPC_HANDLE: string;
		ZPLUG_PROTOCOL: string;
		TZDIR: string;
		KDE_SESSION_VERSION: string;
		ZPLUG_USE_CACHE: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		ZPLUG_HOME: string;
		PAGER: string;
		__HM_ZSH_SESS_VARS_SOURCED: string;
		LC_TELEPHONE: string;
		QTWEBKIT_PLUGIN_PATH: string;
		LC_MEASUREMENT: string;
		__NIXOS_SET_ENVIRONMENT_DONE: string;
		XDG_VTNR: string;
		ZPLUG_REPOS: string;
		XDG_SESSION_ID: string;
		LOCALE_ARCHIVE: string;
		LESSKEYIN_SYSTEM: string;
		npm_config_user_agent: string;
		ZPLUG_LOADFILE: string;
		QML2_IMPORT_PATH: string;
		TERMINFO_DIRS: string;
		npm_execpath: string;
		MOZ_PLUGIN_PATH: string;
		XDG_RUNTIME_DIR: string;
		npm_package_json: string;
		LC_TIME: string;
		_ZPLUG_CONFIG_SUBSHELL: string;
		KDEDIRS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		NIXOS_XDG_OPEN_USE_PORTAL: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		JOURNAL_STREAM: string;
		XCURSOR_THEME: string;
		XDG_DATA_DIRS: string;
		GDK_BACKEND: string;
		KDE_FULL_SESSION: string;
		LIBEXEC_PATH: string;
		PATH: string;
		ZPLUG_ERROR_LOG: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		KDE_APPLICATIONS_AS_SCOPE: string;
		KPACKAGE_DEP_RESOLVERS_PATH: string;
		QT_PLUGIN_PATH: string;
		npm_node_execpath: string;
		LC_NUMERIC: string;
		OLDPWD: string;
		TERM_PROGRAM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
