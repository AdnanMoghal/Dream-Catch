<template>
	<div class="search-friends-top">
		<div class="heading">
			<p>{{title}}</p>
		</div>
		<div class="search-field">
			<div class="sc">
				<div class="sc__container">

					<div class="sc__wrapper">
						<label>
							<input type="text" placeholder="Поиск">
						</label>
					</div>

				</div>

			</div>  
		</div>
	</div>
</template>
<script lang="ts">
import {Vue, Prop, Component} from "nuxt-property-decorator";
@Component({})

export default class FriendsSearch extends Vue {
@Prop () title;

	created() {

	}

}

</script>

<style lang="scss"
scoped>
@import "assets/css/variables";

.user-main-page {
	padding: 30px 0;
}

.m-wrapper {
	margin-bottom: 20px;

	@include for-large() {
	padding: 20px;
}

@include for-small() {
padding: 10px;
margin-bottom: 10px;
}

&.add-btn {
	padding: 0px;
}
}
.search-friends-top{
	display:flex;

	align-items:center;
	background:white;
	border-top-left-radius:4px;
	border-top-right-radius:4px;
	padding:20px;
	//border-bottom: 1px solid #EDEDED;

.search-field{
	margin-left:40px;
	    width: 83%;
}
	label {
	position: relative;
}

label:before {
content: "";
position: absolute;
left: 0px;
top: 0;
bottom: 0;
width: 20px;
background: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.0473 19.0252L12.8427 11.8207C15.3732 8.72576 14.9157 4.16549 11.8208 1.63496C8.72593 -0.895569 4.16561 -0.438026 1.63508 2.65684C-0.895448 5.75171 -0.437904 10.312 2.65697 12.8426C5.32275 15.0222 9.15502 15.0222 11.8208 12.8426L19.0254 20.0471C19.3125 20.3244 19.77 20.3165 20.0473 20.0294C20.3177 19.7493 20.3177 19.3053 20.0473 19.0252ZM7.25044 13.0319C4.05886 13.0283 1.47243 10.4419 1.46888 7.25032C1.46888 4.05725 4.05738 1.46875 7.25044 1.46875C10.4435 1.46875 13.032 4.05725 13.032 7.25032C13.032 10.4434 10.4435 13.0319 7.25044 13.0319Z' fill='%232F2F2F'/%3E%3C/svg%3E%0A") center / contain no-repeat;
}

input {
	padding: 10px 30px;
	border-right: 0px;
	border-top: 0px;
	border-left: 0px;
	border-bottom: 1px solid #cccc;
	width: 100%;
	
	&:focus-visible{
	outline: none;
}
}

}


.sc {
	&__wrapper {
	position: relative;

}

&__error {
	position: absolute;
	left: 0;
	right: 0;
	margin: 0 auto;
	bottom: -18px;
	text-align: center;
	font-size: 12px;
	color: $color-coralmain;
	transition: all 0.4s ease-out;
}

&__input {
	width: 100%;
	border: 0;
	padding: 6px 30px 6px 100px;
	text-align: center;
	max-width: 790px;
	display: block;
	border-bottom: 1px solid #EDEDED;
	transition: all 0.4s ease-out;

	@include for-average() {
	font-size: 14px;
}

&.error-text {
	border-color: $color-coralmain;
}

&:focus {
	outline-width: 0;
}
}

&__title {
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	font-size: 18px;
	font-weight: 500;

	@include for-average() {
	font-size: 16px;
}
}


&__lupa {
	background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.0473 19.0252L12.8427 11.8207C15.3732 8.72576 14.9157 4.16549 11.8208 1.63496C8.72593 -0.895569 4.16561 -0.438026 1.63508 2.65684C-0.895448 5.75171 -0.437904 10.312 2.65697 12.8426C5.32275 15.0222 9.15502 15.0222 11.8208 12.8426L19.0254 20.0471C19.3125 20.3244 19.77 20.3165 20.0473 20.0294C20.3177 19.7493 20.3177 19.3053 20.0473 19.0252ZM7.25044 13.0319C4.05886 13.0283 1.47243 10.4419 1.46888 7.25032C1.46888 4.05725 4.05738 1.46875 7.25044 1.46875C10.4435 1.46875 13.032 4.05725 13.032 7.25032C13.032 10.4434 10.4435 13.0319 7.25044 13.0319Z' fill='%232F2F2F'/%3E%3C/svg%3E%0A");
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);

	display: block;
	width: 20px;
	height: 20px;
}

}
</style>