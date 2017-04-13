import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, undefined> {




	register_application(server: string, appname: string, redirect_url: string) {
		const endpoint = server + '/api/v1/apps'
		const data = new URLSearchParams()
		data.set('response_type', 'code')
		data.set('client_name', appname)
		data.set('redirect_uris', redirect_url)
		const fetchInit = {
			method: 'POST',
			mode: 'cors',
			body: data
		}
		return fetch(endpoint, fetchInit).then(res => res.json())
	}




	render() {
		return <h1>Hello from aaa {this.props.compiler} and {this.props.framework}!</h1>;
	}
}