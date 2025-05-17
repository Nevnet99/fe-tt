import api from "@/lib/axios";
import { queryClient } from "@/lib/QueryProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export type TJob = {
  id: string;
  name: string;
  baseModel: string;
  epochs: number;
  evaluationEpochs: number;
  warmupEpochs: number;
  learningRate: number;
  date: string;
  createdAt: string;
  status: 'Running' | 'Completed' | 'Failed';
}

export type TJobInput = {
  name: string;
  baseModel: string;
  epochs: number;
  evaluationEpochs: number;
  warmupEpochs: number;
  learningRate: number;
}


export const useJobs = ({ id, fetchOnInit = false }: { id?: string, fetchOnInit?: boolean }) => {
  const {  ...getJobs } = useQuery({
    queryKey: ['jobs'],
    queryFn: () => api.get<TJob[]>('/jobs'),
    enabled: fetchOnInit
  })

  const {  ...createJob } = useMutation({
    mutationFn: (job: TJobInput) => api.post<TJob>('/jobs', job),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] })
      toast.success('Job created successfully', {
        id: 'job-created'
      })
    },
    onMutate: () => {
      toast.loading('Creating job...', {
        id: 'job-created'
      })
    },
    onError: () => {
      toast.error('Failed to create job', {
        id: 'job-created'
      })
    }
  })

  const { ...deleteJob } = useMutation({
    mutationFn: (id: string) => api.delete<TJob>(`/jobs/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] })
      toast.success('Job deleted successfully', {
        id: 'job-deleted'
      })
    },
    onMutate: () => {
      toast.loading('Deleting job...', {
        id: 'job-deleted'
      })
    },
    onError: () => {
      toast.error('Failed to delete job', {
        id: 'job-deleted'
      })
    }
  })

  const {  ...getJobById } = useQuery({
    queryKey: ['job', id],
    queryFn: () => api.get<TJob>(`/jobs/${id}`),
    enabled: false
  })

  return {
    getJobs: {
      ...getJobs
    },
    createJob: {
      ...createJob
    },
    deleteJob: {
      ...deleteJob
    },
    getJobById: {
      ...getJobById
    }
  }
  
}
