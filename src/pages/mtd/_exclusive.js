import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import device from 'themes/device.js'

const query = graphql`
    query {
        multiplier: file(relativePath: { eq: "binary-to-deriv/multiplier.png" }) {
            ...fadeIn
        }
        trade_in_the_moment: file(relativePath: { eq: "binary-to-deriv/trade-in-the-moment.png" }) {
            ...fadeIn
        }
        jump_indices: file(relativePath: { eq: "binary-to-deriv/jump-indices.png" }) {
            ...fadeIn
        }
        deriv_academy: file(relativePath: { eq: "binary-to-deriv/deriv-academy.png" }) {
            ...fadeIn
        }
    }
`
const ContentWrapper = styled(Flex)`
    position: relative;
`
const ParentWrapper = styled(Flex)`
    max-width: 100%;

    @media ${device.desktopS} {
        max-width: 1200px;
    }

    @media ${device.laptopM} {
        flex-wrap: wrap;
        max-width: 84rem;
    }

    @media ${device.tablet} {
        max-width: 58.8rem;
        flex-wrap: nowrap;
        flex-direction: column;
    }
`
const ItemsWrapper = styled(Flex)`
    border-radius: 8px;
    max-width: 282px;
    box-shadow: 0 4px 8px rgba(14, 14, 14, 0.1);
    overflow: hidden;
    margin-right: 24px;
    height: auto;
    max-height: 420px;

    :last-child {
        margin-right: 0;
    }

    @media ${device.laptopM} {
        :nth-child(odd) {
            margin-right: 24px;
        }
        :last-child {
            margin-right: unset;
        }

        margin-right: 0;
        margin-bottom: 24px;
    }

    @media ${device.tablet} {
        margin: 0 auto 24px;

        :nth-child(odd) {
            margin-right: auto;
        }
        :last-child {
            margin: 0 auto 0 !important;
        }
    }

    @media ${device.mobileL} {
        max-width: 100%;
    }
`
const StyledHeader = styled(Header)`
    margin: 0 0 8px;

    @media ${device.desktopS} {
        font-size: 24px;
        line-height: 36px;
    }

    @media ${device.tabletL} {
        font-size: 24px;
        line-height: 36px;
        max-width: 264px;
        margin: 0 auto 8px;
    }
`
const StyledSmallHeader = styled(Header)`
    @media ${device.desktopS} {
        font-size: 16px;
        line-height: 24px;
    }

    @media ${device.tabletL} {
        font-size: 16px;
        line-height: 24px;
    }
`

const Exclusive = () => {
    const data = useStaticQuery(query)

    const exclusiveItems = [
        {
            image: 'multiplier',
            image_alt: 'Multiplier',
            header: 'Trade multipliers',
            desc: 'Combine the upside of leverage trading with the simplicity and limited risk of options.',
        },
        {
            image: 'jump_indices',
            image_alt: 'Jump Indices',
            header: 'Trade Jump indices',
            desc: 'Experience equal probability of an upward or downward price jump every 20 minutes on average. Available 24/7.',
        },
        {
            image: 'deriv_academy',
            image_alt: 'Deriv Academy',
            header: 'Upskill with Deriv Academy',
            desc: 'Boost your trading skills at our learning hub. Get the know-how on markets, trade types, platforms, plus more.',
        },
        {
            image: 'trade_in_the_moment',
            image_alt: 'Trade in the moment',
            header: 'Trade <br /> in-the-moment',
            desc: 'Experience powerful, in-line charts for seamless trading. No more scrolling or taking your eyes off the market. ',
        },
    ]

    return (
        <Container fd="column" pt="40px" pb="120px" tablet={{ pb: '40px' }}>
            <Flex fd="column" mb="40px" tabletL={{ mb: '24px' }}>
                <Header as="h2" type="heading-2" align="center" mb="8px">
                    Exclusively on Deriv
                </Header>
                <Header as="h3" type="subtitle-1" align="center" weight="normal">
                    There’s a bright future ahead.
                </Header>
                <Header as="h3" type="subtitle-1" align="center" weight="normal">
                    Find these bonus features and more on Deriv:
                </Header>
            </Flex>
            <ParentWrapper>
                {exclusiveItems.map((items, index) => {
                    return (
                        <ItemsWrapper key={index} fd="column">
                            <ContentWrapper>
                                <QueryImage
                                    data={data[items.image]}
                                    alt={items.image_alt}
                                    width="100%"
                                />
                            </ContentWrapper>
                            <Flex fd="column" p="32px">
                                <StyledHeader
                                    type="subtitle-1"
                                    align="center"
                                    dangerouslySetInnerHTML={{ __html: items.header }}
                                />
                                <StyledSmallHeader
                                    type="paragraph-1"
                                    weight="normal"
                                    align="center"
                                >
                                    {items.desc}
                                </StyledSmallHeader>
                            </Flex>
                        </ItemsWrapper>
                    )
                })}
            </ParentWrapper>
        </Container>
    )
}

export default Exclusive
