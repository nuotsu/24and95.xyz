import { structureTool } from 'sanity/structure'

export const structure = structureTool({
	structure: (S) => S.list().title('Content').items(S.documentTypeListItems()),
})
