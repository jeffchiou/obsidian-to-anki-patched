import { FIELDS_DICT } from './field-interface'
import { AnkiConnectNote } from './note-interface'

export interface PluginSettings {
	CUSTOM_REGEXPS: Record<string, string>,
	FILE_LINK_FIELDS: Record<string, string>,
	CONTEXT_FIELDS: Record<string, string>,
	FOLDER_DECKS: Record<string, string>,
	FOLDER_TAGS: Record<string, string>,
	Syntax: {
		"Begin Note": string,
		"End Note": string,
		"Begin Inline Note": string,
		"End Inline Note": string,
		"Target Deck Line": string,
		"File Tags Line": string,
		"Delete Note Line": string,
		"Frozen Fields Line": string
	},
	Defaults: {
		"Tag": string,
		"Deck": string,
		"Scheduling Interval": number
		"Add File Link": boolean,
		"Add Context": boolean,
		"CurlyCloze": boolean,
		"CurlyCloze - Highlights to Clozes": boolean,
		"ID Comments": boolean,
		"Add Obsidian Tags": boolean,
		"Use Advanced URI Links": boolean,
		"Auto Target Deck from Path": boolean,
		"Rescan Error Throwing Files": boolean
	},
	IGNORED_FILE_GLOBS:string[]
}

export interface FileData {
	//All the data that a file would need.
	fields_dict: FIELDS_DICT
	custom_regexps: Record<string, string>
	file_link_fields: Record<string, string>
	context_fields: Record<string, string>
	template: AnkiConnectNote
	EXISTING_IDS: number[]
	vault_name: string

	FROZEN_REGEXP: RegExp
	DECK_REGEXP: RegExp
	TAG_REGEXP: RegExp
	NOTE_REGEXP: RegExp
	INLINE_REGEXP: RegExp
	EMPTY_REGEXP: RegExp

	curly_cloze: boolean
	highlights_to_cloze: boolean
	comment: boolean
	add_context: boolean
	add_obs_tags: boolean
	use_advanced_uri: boolean
	auto_target_deck: boolean
	rescan_error_files: boolean
}

export interface ParsedSettings extends FileData {
    add_file_link: boolean
	folder_decks: Record<string, string>
	folder_tags: Record<string, string>
	ignored_file_globs: string[]
}
