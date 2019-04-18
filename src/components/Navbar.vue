<template>
	<div class="topo">
		<b-navbar toggleable="md" class="fixed-top">
			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
			<b-navbar-brand to="/"><b-img :src="require('@/assets/logo.png')" class="logo-img" fluid width="90%"></b-img></b-navbar-brand>

			<b-collapse is-nav id="nav_collapse">
				<b-navbar-nav class="ml-auto">
					<b-nav-item v-for="(item,index) in menu" :key="'nav-'+index" v-scroll-to="item.to">{{item.text}}</b-nav-item>
					<b-nav-item href="https://www.instagram.com/jpm_engenhariadeincendio/" target="_blank"><font-awesome-icon class="fa-icon" :icon="['fab', 'instagram']"></font-awesome-icon></b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				menu: [
					{text: 'O QUE FAZEMOS', to: '#nos'},
					{text: 'SERVIÇOS', to: '#servicos'},
					{text: 'CLIENTES', to: '#clientes'},
					{text: 'CONTATO', to: '#contato'}
				]
			}
		}
	}
</script>

<style type="text/css" scoped>


.navbar {
	padding-top: 8px;
	padding: 0px 150px;
	position: absolute;
	width: 100%;
	top: 0;
	z-index: 1001;
}

.nav-item {
	font-size: 14px;
	padding: 20px 20px;
	font-weight: 500;
}

.fa-icon {
	font-size: 18px;
}

.nav-link {
	color: #fff !important;
}

.navbar-brand {
	padding: 20px 20px;
}

@media (max-width: 720px) {
	.navbar{
		position: sticky;
        padding: 0px 50px;
	}

	.navbar-collapse {
		background: #fff;
	}

	.nav-link {
		color: #000 !important;
	}

	.navbar-brand {
		width: 40%;
		padding: 5px 20px;
	}
}
</style>