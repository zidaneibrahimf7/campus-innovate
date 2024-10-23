'use client';
import styled from 'styled-components';
import Image from 'next/image';

interface DividerTypes {
  type?: string;
}

export const LoginLogo = () => {
  return <Image src="/assets/" alt="Logo BSI" width={255} height={70} />;
};

export const LoginTitle = () => {
  return <Image src="/assets/" alt="Logo BSI" width={102} height={32} />;
};

const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 24.2px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #ee4312;
`;

export const Divider = styled.div<DividerTypes>`
  width: 100%;
  height: 1px;
  border: 1px ${(props) => (props.type ? props.type : 'solid')} #ee4312;
`;
