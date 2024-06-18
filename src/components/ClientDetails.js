import React from 'react'

const ClientDetails = ({clientname, clientaddress}) => {
  return (
    <> <section className="mt-10">
    <h2 className="text-2xl font-bold uppercase">
      {clientname}
    </h2>
    <p>{clientaddress}</p>
  </section>
  </>
  )
}

export default ClientDetails