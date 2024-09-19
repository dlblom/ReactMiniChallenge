// TO DO: The FactsList compoennt should dynmamically render an animal fact with a Fact component

export function FactsList() {
  return (
    <div className='factsList' data-testid='factsList'>
      {facts.map((fact) => <Fact fact={fact} key={fact}/>)}
    </div>
  );
}
