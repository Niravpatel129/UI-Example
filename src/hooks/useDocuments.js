import { accounts, defaultAccount, prefDocuments } from '../../static/mockData';

export default function useDocuments() {
  return { accounts, prefDocuments, defaultAccount: defaultAccount.data.default_accounts[0] };
}
