import { Company } from '../../interfaces';

export const groupCompaniesByRow = (companies: Company[]): Company[][] => {
  const groupedCompanies: { [key: number]: Company[] } = {};

  for (const company of companies) {
    if (!groupedCompanies[company.row]) {
      groupedCompanies[company.row] = [];
    }
    groupedCompanies[company.row].push(company);
  }

  return Object.values(groupedCompanies);
};
