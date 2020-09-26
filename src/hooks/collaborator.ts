import { useQuery } from 'react-query';

import { getCollaborators } from '@Api/collaborator';

export const useCollaborators = () => {
  return useQuery('collaborators', getCollaborators);
};
