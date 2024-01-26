import styled from '@emotion/styled';
import { Icon as PhosphorIcon } from "@phosphor-icons/react";
import React from "react";
import { CenteredFlexbox } from "../../utility/CenteredFlexbox";

export interface NavLinkProps {
  icon?: PhosphorIcon;
  label?: string;
  selected?: boolean;
  linkComponent?: React.ReactNode;
}

const NavLinkContainer = styled('li')<NavLinkProps>(({ selected }) =>
  `
    display: flex;
    align-items: center;
    padding: var(--r-spacing-20) var(--r-spacing-40);
    gap: var(--r-spacing-25 );
    background-color: ${selected ? "#fafafa" : "transparent"};
    font-size: 0.8125rem;
    border-radius: var(--r-border-radius-sm);
    cursor: pointer;
    box-shadow: ${selected ? "var(--r-shadow-xs)" : "none"};
    z-index: ${selected ? 10 : 0};
    user-select: none;

    &:hover {
      background-color: ${selected ? "#f6f6f6" : "#ebebeb"};
    }
  `
);

export function NavLink({ icon: Icon, label, selected, linkComponent }: NavLinkProps) {
  const navLink = (
    <NavLinkContainer selected={selected}>
      {
        Icon &&
        <CenteredFlexbox>
          <Icon color={selected ? "#272727" : "#606060"} size={16} weight={selected ? "bold" : "regular"} />
        </CenteredFlexbox>
      }
      <span style={{ fontWeight: selected ? 600 : 500, color: selected ? undefined : '#4f4f4f' }}>{label}</span>
    </NavLinkContainer>
  )

  if (linkComponent) {
    return React.isValidElement(linkComponent)
      ? React.cloneElement(linkComponent as React.ReactElement, { ...linkComponent.props }, navLink)
      : null;
  }

  return navLink;
}