import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export type TModel = {
  id: string;
  model: string;
}


export const useModels = ({ fetchOnInit = false }: { fetchOnInit?: boolean }) => {
  const {  ...getModels } = useQuery({
    queryKey: ['models'],
    queryFn: () => api.get<TModel[]>('/models'),
    enabled: fetchOnInit
  })

  return {
    models: {
      ...getModels
    }
  }
}
