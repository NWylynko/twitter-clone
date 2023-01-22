"use client";

import { httpBatchLink, loggerLink } from "@trpc/client";
import { PropsWithChildren, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getBaseUrl } from "@/utils/getBaseUrl";
import { trpc } from "@/trpc";
import { useAuthJWT } from "@/hooks/useAuth";

export function TRPCProvider(props: PropsWithChildren) {
  const jwt = useAuthJWT();
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient, setTrpcClient] = useState<ReturnType<typeof trpc.createClient> | undefined>(undefined);

  useEffect(() => {
    console.log({ jwt })
      setTrpcClient(
        trpc.createClient({
          links: [
            loggerLink({
              enabled: () => true,
            }),
            httpBatchLink({
              url: `${getBaseUrl()}/api/trpc`,
              headers: () => ({
                Authorization: `Bearer ${jwt}`,
              })
            }),
          ],
        })
      )
  }, [jwt])

  if (!trpcClient) {
    return (
      <>
        {props.children}
      </>
    )
  }

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
