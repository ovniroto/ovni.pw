import { AppProps } from "$fresh/server.ts"
import { asset } from "$fresh/runtime.ts"
import Stars from "../components/Stars.tsx"

export default function App({ Component }: AppProps) {
	return (
		<html lang="en">
		<head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Super Secure Password Generator - OVNI.pw</title>
			<meta name="description" content="On this website you can create a super secure password without having to store or remember it."/>
			<meta name="robots" content="index, follow" />
			<link rel="stylesheet" href={ asset("/styles/global.css") } />
			<link href="https://cdn.jsdelivr.net/npm/daisyui@3.6.4/dist/full.css" rel="stylesheet" type="text/css" />
			<link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico?v=1" />
			<script src="./libs/sha.min.js" />
		</head>
		<body>
			<Stars />
			<Component />
		</body>
		</html>
	)
}
