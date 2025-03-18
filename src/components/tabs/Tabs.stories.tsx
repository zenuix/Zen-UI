import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './index';

const meta = {
  title: 'Components/Tabs',
  component: Tabs
} as Meta;

export default meta;

type Story = StoryObj<typeof Tabs>;

export const VerticalTabs: Story = {
  render: () => (
    <Tabs>
      <Tabs.tabGroup>
        <Tabs.tab id="1">국내여행</Tabs.tab>
        <Tabs.tab id="2">해외여행</Tabs.tab>
        <Tabs.tab id="3">여행 팁</Tabs.tab>
        <Tabs.tab id="4">맛집 탐방</Tabs.tab>
        <Tabs.tab id="5">사진 갤러리</Tabs.tab>
      </Tabs.tabGroup>
      <Tabs.contentGroup>
        <Tabs.content id="1">
          제주도의 푸른 바다를 바라보며 시원한 바닷바람을 맞는 순간, 모든 일상의 스트레스가 날아갑니다. 오름을 오르며
          느끼는 자연의 숨결, 흑돼지와 해산물로 가득한 식탁, 그리고 따뜻한 제주 사람들의 정. 제주도는 언제 방문해도
          새로운 매력을 발견할 수 있는 곳입니다. 사계절 내내 아름다운 제주의 모습을 사진과 함께 소개합니다.
        </Tabs.content>
        <Tabs.content id="2">
          푸른 지중해가 펼쳐진 산토리니, 예술의 도시 파리, 고대 문명의 숨결이 느껴지는 로마까지. 각국의 독특한 문화와
          역사, 그리고 현지인만 아는 숨은 명소들을 소개합니다. 여행 계획부터 항공권 예약 팁, 현지 교통편 이용법까지
          알차고 유용한 정보로 여러분의 완벽한 여행을 도와드립니다.
        </Tabs.content>
        <Tabs.content id="3">
          여행 가방 꾸리는 법부터 환전, 여행자 보험, 비자 신청까지. 여행을 준비하는 과정에서 알아두면 유용한 정보들을
          모았습니다. 초보 여행자도 걱정 없이 떠날 수 있도록 단계별로 준비 사항을 안내해 드립니다. 여행지에서 현지인처럼
          행동하기 위한 에티켓과 문화적 주의사항도 함께 알아보세요.
        </Tabs.content>
        <Tabs.content id="4">
          전 세계 각국의 대표 음식부터 현지인만 아는 숨은 맛집까지. 여행의 즐거움 중 하나는 바로 현지 음식을 맛보는
          것입니다. 식당 예약 방법, 현지 음식 주문 팁, 꼭 먹어봐야 할 메뉴 추천까지 맛있는 여행을 위한 모든 정보를
          담았습니다.
        </Tabs.content>
        <Tabs.content id="5">
          여행지에서 담아온 아름다운 순간들을 공유합니다. 해질녘 산토리니의 황홀한 풍경, 안개에 쌓인 마추픽추의 신비로운
          모습, 눈 덮인 알프스의 장엄한 자태까지. 여행의 감동을 생생하게 전달하는 고화질 사진들을 감상하세요. 여러분에게
          다음 여행지에 대한 영감을 드립니다.
        </Tabs.content>
      </Tabs.contentGroup>
    </Tabs>
  )
};

export const HorizontalTabs: Story = {
  render: () => (
    <Tabs orientation="horizontal">
      <Tabs.tabGroup>
        <Tabs.tab id="1">국내여행</Tabs.tab>
        <Tabs.tab id="2">해외여행</Tabs.tab>
        <Tabs.tab id="3">여행 팁</Tabs.tab>
        <Tabs.tab id="4">맛집 탐방</Tabs.tab>
        <Tabs.tab id="5">사진 갤러리</Tabs.tab>
      </Tabs.tabGroup>
      <Tabs.contentGroup>
        <Tabs.content id="1">
          제주도의 푸른 바다를 바라보며 시원한 바닷바람을 맞는 순간, 모든 일상의 스트레스가 날아갑니다. 오름을 오르며
          느끼는 자연의 숨결, 흑돼지와 해산물로 가득한 식탁, 그리고 따뜻한 제주 사람들의 정. 제주도는 언제 방문해도
          새로운 매력을 발견할 수 있는 곳입니다. 사계절 내내 아름다운 제주의 모습을 사진과 함께 소개합니다.
        </Tabs.content>
        <Tabs.content id="2">
          푸른 지중해가 펼쳐진 산토리니, 예술의 도시 파리, 고대 문명의 숨결이 느껴지는 로마까지. 각국의 독특한 문화와
          역사, 그리고 현지인만 아는 숨은 명소들을 소개합니다. 여행 계획부터 항공권 예약 팁, 현지 교통편 이용법까지
          알차고 유용한 정보로 여러분의 완벽한 여행을 도와드립니다.
        </Tabs.content>
        <Tabs.content id="3">
          여행 가방 꾸리는 법부터 환전, 여행자 보험, 비자 신청까지. 여행을 준비하는 과정에서 알아두면 유용한 정보들을
          모았습니다. 초보 여행자도 걱정 없이 떠날 수 있도록 단계별로 준비 사항을 안내해 드립니다. 여행지에서 현지인처럼
          행동하기 위한 에티켓과 문화적 주의사항도 함께 알아보세요.
        </Tabs.content>
        <Tabs.content id="4">
          전 세계 각국의 대표 음식부터 현지인만 아는 숨은 맛집까지. 여행의 즐거움 중 하나는 바로 현지 음식을 맛보는
          것입니다. 식당 예약 방법, 현지 음식 주문 팁, 꼭 먹어봐야 할 메뉴 추천까지 맛있는 여행을 위한 모든 정보를
          담았습니다.
        </Tabs.content>
        <Tabs.content id="5">
          여행지에서 담아온 아름다운 순간들을 공유합니다. 해질녘 산토리니의 황홀한 풍경, 안개에 쌓인 마추픽추의 신비로운
          모습, 눈 덮인 알프스의 장엄한 자태까지. 여행의 감동을 생생하게 전달하는 고화질 사진들을 감상하세요. 여러분에게
          다음 여행지에 대한 영감을 드립니다.
        </Tabs.content>
      </Tabs.contentGroup>
    </Tabs>
  )
};
