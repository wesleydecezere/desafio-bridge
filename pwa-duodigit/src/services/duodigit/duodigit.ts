import { RowType } from '../../types';
import { BASE_URL } from '../../utils';

export type PostResponse<DataType> = {
  ok: boolean,
  data: DataType,
};

type PostData = Record<string, unknown>;

async function runPost(route: string, data: PostData): Promise<PostResponse<PostData>> {
  const path = BASE_URL.concat(route);
  const params = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'content-type': 'application/json' },
  };

  console.log(path);

  return fetch(path, params)
    .then((res) => {
      if (!res.ok) { throw new Error('Communication has failed'); }
      return res;
    })
    .then((res) => res.json());
}

async function checkSmallestDuodigitMultiple(n: number): Promise<RowType> {
  const route = '/duodigit';

  const response = await runPost(route, { number: n }) as PostResponse<RowType>;
  if (!response.ok) throw new Error('Operação muito longa...');
  return response.data;
}

export { runPost, checkSmallestDuodigitMultiple };
