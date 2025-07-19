<script lang="ts">
  let count = $state(0)

  const decrement = () => count.set(count - 1)
  const increment = () => count.set(count + 1)
</script>

<main>
  <h1>Hello {appState.name}!</h1>
  <p>You clicked {count} times.</p>
  <button on:click={decrement}>-</button>
  <button on:click={increment}>+</button>
</main>
