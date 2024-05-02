const React = require('react')
const Default = require('./layouts/default')

function Show ({bread}) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
      return (
        <Default>
            <h3>{bread.name}</h3>
            <p>
                and it
                {
                    bread.hasGluten
                    ? <span> does </span>
                    : <span> does NOT </span>
                }
                have gluten.
            </p>
            <form action={`/breads/${bread._id}?_method=DELETE`} method="POST">
            <input type='submit' value="DELETE"/>
            </form>
            <img src={bread.image} alt={bread.name} />
            <p>{bread.getBakedBy()}</p>
            <a href={`/breads/${bread._id}/edit`}><button>Edit</button></a>
            <li><a href="/breads">Go home</a></li>
        </Default>
      )
  }

module.exports = Show
