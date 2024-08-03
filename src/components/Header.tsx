import './_common.css';

export default function Header() {
	return (
		<div id="header" className="h-header min-w-full flex flex-row p-4 bg-custom-off-dark-800 gap-4 items-center">
			<div className="flex flex-row gap-2">
				<div className="bg-custom-red window-button"></div>
				<div className="bg-custom-yellow window-button"></div>
				<div className="bg-custom-green window-button"></div>
			</div>
			<span className="text-base text-custom-off-dark-300">cameron_young</span>
		</div>
	)
}