import styled from "styled-components";

export const ContentContainer = styled.main`
  width: 54rem;

  margin: 0 auto;
`;

export const SummaryContainer = styled.div`
  width: 54rem;
  height: 10.5rem;

  padding: 2rem 2.5rem;
  margin-top: -88px;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors["base-profile"]};
`;

export const SummaryHeader = styled.header`
  display: flex;
  justify-content: space-between;

  a {
    height: fit-content;

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors["blue"]};
    ${({ theme }) => theme.fonts.link};

    text-decoration: none;
    cursor: pointer;
    line-height: 0;

    img {
      width: 0.75rem;
      height: 0.75rem;
    }

    span {
      margin: 0 0.5rem;
    }
  }
`;
export const SummaryTitle = styled.p`
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;

  color: ${({ theme }) => theme.colors["base-title"]};

  ${({ theme }) => theme.fonts.titleL};
`;
export const SummaryFooter = styled.footer`
  display: flex;
  gap: 2rem;

  div {
    color: ${({ theme }) => theme.colors["base-span"]};
    ${({ theme }) => theme.fonts.textM};
  }

  svg {
    width: 1.125rem;
    height: 1.125rem;

    margin-right: 0.5rem;

    color: ${({ theme }) => theme.colors["base-label"]};
  }
`;

export const Content = styled.p`
  padding: 2.5rem 2rem;

  color: ${({ theme }) => theme.colors["base-text"]};
  ${({ theme }) => theme.fonts.textM};
`;
