import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiMiniCpuChip,
  HiOutlineCog6Tooth,
  HiOutlineHome,
} from "react-icons/hi2";
import { GiComputerFan } from "react-icons/gi";
import { BsMotherboard, BsGpuCard ,BsMemory, BsWindows} from "react-icons/bs";
import { MdOutlinePower, MdSdStorage} from "react-icons/md";
import { PiComputerTowerLight } from "react-icons/pi";
import { GrFanOption } from "react-icons/gr";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  const {t} = useTranslation();
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/builder">
          <FaScrewdriverWrench />
            <span>{t('pcbuilder')}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cpu">
            <HiMiniCpuChip />
            <span>{t('cpu')}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cpu-cooler">
          <GiComputerFan />
            <span>{t('cpu-cooler')}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/mobo">
            <BsMotherboard />
            <span>{t('mobo')}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/gpu">
            <BsGpuCard />
            <span>{t('gpu')}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/ram">
            <BsMemory />
            <span>{t('ram')}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/psu">
            <MdOutlinePower />
            <span>{t('psu')}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/case">
          <PiComputerTowerLight />
            <span>{t('case')}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/case-fan">
          <GrFanOption />
            <span>{t('casefan')}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/storage">
            <MdSdStorage />
            <span>{t('storage')}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/os">
            <BsWindows />
            <span>{t('os')}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>{t('settings')}</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
