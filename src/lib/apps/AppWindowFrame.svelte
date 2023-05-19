<script lang="ts">
	import { draggable } from '@neodrag/svelte';
	import { createEventDispatcher } from 'svelte';

	const eventDispatcher = createEventDispatcher();

	export let title: string;

	let position = { x: 100, y: 100 };
</script>

<div
	use:draggable={{
		position: { x: position.x, y: position.y },
		handle: '.window-top-frame',
		onDrag({ offsetX, offsetY }) {
			position = { x: offsetX, y: offsetY };
		}
	}}
	class="window"
>
	<div class="window-frame">
		<div
			class="window-top-frame"
			on:dblclick={(e) => {
				const windowEl = e.currentTarget.closest('.window');
				if (windowEl instanceof HTMLDivElement) {
					const isExpandedHorizontally = windowEl.clientWidth > window.innerWidth * 0.8;
					const isExpandedVertically = windowEl.clientHeight > window.innerHeight * 0.8;

					if (isExpandedHorizontally || isExpandedVertically) {
						// size down
						windowEl.style.width = '400px';
						windowEl.style.height = '300px';
						position = { x: 20, y: 20 };
					} else {
						// size up
						windowEl.style.width = '100vw';
						windowEl.style.height = 'calc(100vh - 80px)'; // window height - taskbar height
						position = { x: 0, y: 0 };
					}
				}
			}}
		>
			<div>{title}</div>
			<div>
				<button
					aria-label="close"
					class="hover:bg-red-600 hover:bg-opacity-5 p-1 rounded-md"
					on:click={() => eventDispatcher('close')}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16.933333 16.933334"
						height="13"
						width="13"
						class="stroke-white fill-white"
					>
						<g>
							<path
								id="path839"
								d="M 2.4863281 1.8535156 A 0.66145998 0.66145998 0 0 0 2.0449219 2.0449219 A 0.66145998 0.66145998 0 0 0 2.0449219 2.9804688 L 7.53125 8.4648438 L 2.0449219 13.951172 A 0.66145998 0.66145998 0 0 0 2.0449219 14.886719 A 0.66145998 0.66145998 0 0 0 2.9804688 14.886719 L 8.4648438 9.4023438 L 13.951172 14.886719 A 0.66145998 0.66145998 0 0 0 14.886719 14.886719 A 0.66145998 0.66145998 0 0 0 14.886719 13.951172 L 9.4023438 8.4648438 L 14.886719 2.9804688 A 0.66145998 0.66145998 0 0 0 14.886719 2.0449219 A 0.66145998 0.66145998 0 0 0 13.951172 2.0449219 L 8.4648438 7.53125 L 2.9804688 2.0449219 A 0.66145998 0.66145998 0 0 0 2.4863281 1.8535156 z "
								style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.32292;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate;stop-color:#000000;stop-opacity:1;opacity:1"
							/>
						</g>
					</svg></button
				>
			</div>
		</div>
		<slot />
	</div>
</div>

<style lang="postcss">
	.window {
		@apply absolute border border-black resize inset-1 overflow-hidden min-w-[48rem] min-h-[24rem] shadow-2xl rounded-lg;
	}

	.window-top-frame {
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		background-color: rgb(0 0 0 / 0.6);
		@apply py-2 px-4 flex justify-between;
	}

	.window-frame {
		@apply flex flex-col h-full;
	}
</style>
