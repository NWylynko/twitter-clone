"use client"

import { trpc } from "@/trpc"

const Fetch = () => {
  
  const response = trpc.hello.useMutation()
  
  return (
    <div>
      <button onClick={() => response.mutate("world")} >Call</button>
      <pre>
        {JSON.stringify(response, null, 2)}
      </pre>
    </div>
  )
}

export default Fetch