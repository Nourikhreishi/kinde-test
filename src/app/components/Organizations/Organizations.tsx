'use client';

import { KindeOrganizations } from '@kinde-oss/kinde-auth-nextjs';
import { useState, useEffect } from 'react';
import { Organization } from './Organization';
import styles from './Organizations.module.css';

interface IOrganizationsResponse {
  organizations: KindeOrganizations | null;
}

export const Organizations = ({ organizations }: IOrganizationsResponse) => {
  if (!organizations?.orgs) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyState}>
          <h2 className={`text-heading-1 ${styles.emptyStateTitle}`}>
            No Organizations Found
          </h2>
          <p className="text-body-3 text-subtle">
            You don&apos;t have access to any organizations at the moment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <h2 className={`text-display-2 ${styles.title}`}>
          Your Organizations
        </h2>
        <p className={`text-body-3 ${styles.description}`}>
          You have access to <strong>{organizations.orgs.length}</strong> organization{organizations.orgs.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Organizations Grid */}
      <div className={styles.grid}>
        {organizations.orgs.map((org) => (
          <Organization key={org.code} organization={org} />
        ))}
      </div>
    </div>
  );
}; 