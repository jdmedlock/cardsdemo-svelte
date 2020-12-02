<script>
  import Card from './Card.svelte'

  export let team // Declare the prop we are expecting
</script>

{#each team as member}
  <Card member={ member } />
{/each}
