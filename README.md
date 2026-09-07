# 만검 아카데미 · OneThousand_Sword

GitHub Pages용 만검 아카데미 세계관/등장인물 소개 사이트입니다.

## 구조
- `index.html` — 메인 페이지
- `styles.css` — 반응형 UI / 다크 네이비·골드 디자인
- `script.js` — 등장인물 카드 및 상세 모달
- `.github/workflows/pages.yml` — GitHub Pages 자동 배포

## 캐릭터 이미지 파일명
아래 파일을 `assets/` 폴더에 업로드하면 카드와 상세 모달에 자동 반영됩니다.

- `assets/celestia.jpg` — 셀레스티아 리멘
- `assets/eline.jpg` — 엘리네 세르벨
- `assets/kaen.jpg` — 카엔 레비에르
- `assets/jinharyeong.jpg` — 진하령
- `assets/riena.jpg` — 리에나 발테르
- `assets/maehwarin.jpg` — 매화린
- `assets/karen.jpg` — 카렌 발카르
- `assets/rei.jpg` — 스즈키 레이
- `assets/ciel.jpg` — 시엘 라벤
- `assets/selen.jpg` — 셀렌 아스트라

이미지가 아직 없으면 카드에는 자동으로 문자 기반 플레이스홀더가 표시됩니다.

## Pages
저장소 Settings → Pages에서 Build and deployment의 Source를 **GitHub Actions**로 지정하면 이후 `main` 브랜치에 푸시할 때 자동 배포됩니다.
