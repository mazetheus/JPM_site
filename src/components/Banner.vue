<template>
	<div class="">
		<h2 class="centered description">Simplifique o seu AVCB,<br>priorize a sua segurança.</h2>
		<img :src="require('../assets/banner.png')" class="img-fluid topo-img" width="100%" alt="Responsive image">
	</div>
</template>

<script>
</script>

<style type="text/css">
	.topo-img {
		padding: 0px;
	}

  .container {
    text-align: center;
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
				font-size: 20px;
				padding-bottom: 120px;
		}

	}

</style>