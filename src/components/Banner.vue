<template>
	<div class="banner-texto">
		<h1 class="centered description">Simplifique o seu AVCB,<br>priorize a sua segurança.</h1>
		<img :src="require('../assets/banner.png')" class="img-fluid topo-img" style="width:100%;" alt="Responsive image">
	</div>
</template>

<script>
</script>

<style type="text/css">
	.topo-img {
		padding: 0px;
	}

  .banner-texto {
		position: relative;
		text-align: center;
		width: 100%;
		color: white;
	}

	.centered {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
	}


	@media (max-width: 720px) {
		.description{
				font-size: 15px;
		}
	}

</style>