<script lang="ts">
  let count = $state(0)

  const decrement = () => count.set(count - 1)
  const increment = () => count.set(count + 1)
</script>

<main>
  <p>You clicked {count} times.</p>
  <button onclick={decrement}>-</button>
  <button onclick={increment}>+</button>
</main>
