import styles from './Organization.module.css';

interface IOrganization {
  code: string;
  name?: string | undefined;
}

interface IOrganizationProps {
  organization: IOrganization;
}

export const Organization = ({ organization }: IOrganizationProps) => {
  const { code, name } = organization;
  return (
    <div className={`organization-card card ${styles.card}`}>
      <h3 className={`text-heading-1 ${styles.title}`}>
        {name || 'Unnamed Organization'}
      </h3>
      <p className={`text-body-3 ${styles.description}`}>
        <strong>Organization Code:</strong> 
        <span className={styles.codeTag}>
          {code}
        </span>
      </p>
    </div>
  );
};