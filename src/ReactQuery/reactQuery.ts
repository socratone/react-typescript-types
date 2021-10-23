import { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';
import {
  deleteTodo,
  DeleteTodoResponseData,
  getTodos,
  postTodo,
  PostTodoPayload,
  PostTodoResponseData,
} from '../Axios/api';

export const useTodos = () => {
  return useQuery(
    ['todos'],
    async () => {
      return await getTodos();
    },
    {
      enabled: true,
    }
  );
};

type UsePostTodoMutationParams = {
  onSuccess: (data: PostTodoResponseData) => void;
  onError: (error: AxiosError) => void;
};

export const usePostTodoMutation = ({
  onError,
  onSuccess,
}: UsePostTodoMutationParams) => {
  return useMutation<PostTodoResponseData, AxiosError, PostTodoPayload>(
    (payload) =>
      postTodo({
        payload,
        parameters: {},
        headerParameters: {},
      }),
    {
      onError,
      onSuccess,
    }
  );
};

type useDeleteTodoMutationParams = {
  onSuccess: (data: DeleteTodoResponseData) => void;
  onError: (error: AxiosError) => void;
};

export const useDeleteTodoMutation = ({
  onError,
  onSuccess,
}: useDeleteTodoMutationParams) => {
  return useMutation<DeleteTodoResponseData, AxiosError, { id: number }>(
    ({ id }) =>
      deleteTodo({
        id,
        headerParameters: {},
      }),
    {
      onError,
      onSuccess,
    }
  );
};
