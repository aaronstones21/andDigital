import endpoints from './api/endpoints'

export default {
	methods: {
		$apiClient(domain) {
			return endpoints[domain]
		},
	},
}
