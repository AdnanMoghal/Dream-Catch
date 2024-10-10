<template>
	<div class="comment-input" >
		<div class="input" >
			<textarea rows='1' v-model="input" placeholder="Написать комментарий..." name=""></textarea>
		</div>
		<div class="icons">
			<ul >
				<li>
					<input type="file" id="openFile" name="" style="display:none;">
					<label for="openFile"><img src="/img/svg/default-svg/gray-svg/attach.svg"></label>
				</li>
				<li>
					<img src="/img/svg/default-svg/gray-svg/camera.svg">
				</li>
				<li>
					
					<emoji-picker @emoji="append" :search="search">
						<div
						class="emoji-invoker"
						slot="emoji-invoker"
						slot-scope="{ events: { click: clickEvent } }"
						@click.stop="clickEvent"
						>
						
						<img src="/img/svg/default-svg/gray-svg/smiling-face.svg">
					</div>
					<div slot="emoji-picker" slot-scope="{ emojis, insert, display }">
						<div class="emoji-picker" style="left:930px">
							<div class="emoji-picker__search">
								<input type="text" v-model="search">
							</div>
							<div>
								<div v-for="(emojiGroup, category) in emojis" :key="category">
									<h5>{{ category }}</h5>
									<div class="emojis">
										<span
										v-for="(emoji, emojiName) in emojiGroup"
										:key="emojiName"
										@click="insert(emoji)"
										:title="emojiName"
										>{{ emoji }}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</emoji-picker>
			</li>
		</ul>
	</div>
</div> 
</template>