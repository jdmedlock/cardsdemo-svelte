<script>
  import CardContainer from '../components/CardContainer.svelte'

  const team = [
    {id: 1, firstName: "John", lastName: "Roku"},
    {id: 2, firstName: "Rakesh", lastName: "Singh"},
    {id: 3, firstName: "Julie", lastName: "Eaker"},
    {id: 4, firstName: "Carla", lastName: "Sanchez"},
    {id: 5, firstName: "Javier", lastName: "Smith"},
  ]
</script>

<div className="App">
  <header className="App-header">
    <h1>React Cards Demo</h1>
    <CardContainer team={ team } />
  </header>
</div>

<style>
  h1 {
    font-weight: bold;
    font-style: italic;
    color: dodgerblue;
  }
</style>