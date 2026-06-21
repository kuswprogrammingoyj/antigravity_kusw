// ==========================================
// 1. GLOSSARY DATABASE (src/data/glossary.js)
// ==========================================
const glossaryData = [
  {
    name: "카카오버터",
    chemicalName: "Cocoa Butter",
    category: "fat",
    dangerLevel: "low",
    simpleDefinition: "카카오 빈에서 추출한 순수한 천연 지방 성분입니다.",
    detailedDescription: "초콜릿의 부드러운 식감과 체온(36.5°C)에서 사르르 녹는 성질을 결정하는 핵심 원료입니다. 가격이 매우 비싸 고급 초콜릿의 척도로 쓰입니다.",
    effectOnBody: "올레산, 스테아르산 등 몸에 유익한 불포화지방산이 풍부하며, 콜레스테롤 수치에 비교적 영향을 적게 줍니다."
  },
  {
    name: "식물성유지",
    chemicalName: "Vegetable Fat / Hydrogenated Palm Oil",
    category: "fat",
    dangerLevel: "high",
    simpleDefinition: "카카오버터 대신 사용되는 저렴한 가공용 기름(팜유, 야자유 등)입니다.",
    detailedDescription: "비싼 카카오버터의 함량을 낮추거나 완전히 대체하여 단가를 낮추기 위해 사용됩니다. 고온에서도 잘 녹지 않아 유통이 쉽지만 맛이 텁텁해집니다.",
    effectOnBody: "포화지방산 비율이 매우 높고 가공 과정에서 트랜스지방이 생성될 수 있어 혈관 건강 및 심혈관 질환 위험을 높일 수 있습니다."
  },
  {
    name: "대두레시틴",
    chemicalName: "Soy Lecithin",
    category: "emulsifier",
    dangerLevel: "low",
    simpleDefinition: "콩에서 추출한 천연 유화제(물과 기름을 섞어주는 성분)입니다.",
    detailedDescription: "초콜릿 원료 안의 수분과 카카오 버터 지방 성분이 분리되지 않고 골고루 섞이게 하여 표면을 매끄럽게 가공할 수 있게 돕습니다.",
    effectOnBody: "대부분 인체에 무해하며 뇌 건강에 도움을 주는 콜린 성분이 들어있습니다. 다만, 대두(콩) 알레르기가 있는 사람은 주의해야 합니다."
  },
  {
    name: "폴리글리세린축합리시놀레인산에스테르",
    chemicalName: "PGPR (Polyglycerol Polyricinoleate)",
    category: "emulsifier",
    dangerLevel: "medium",
    simpleDefinition: "피마자유(합성)에서 유래한 유화제로, 카카오버터 양을 아끼기 위해 씁니다.",
    detailedDescription: "초콜릿의 점도를 낮춰 얇게 코팅하거나 형틀에서 쉽게 떨어지게 돕는 강력한 합성 유화제입니다. 가격이 비싼 카카오버터 함량을 더 줄이기 위해 대중적인 제품에 흔히 첨가됩니다.",
    effectOnBody: "식품의약품안전처 허가 기준 내 소량 섭취는 안전하지만, 화학 합성 첨가물로서 다량 섭취 시 소화 장애를 유발할 수 있다는 우려가 있습니다."
  },
  {
    name: "합성향료",
    chemicalName: "Synthetic Flavorings (e.g. Vanillin)",
    category: "flavor",
    dangerLevel: "medium",
    simpleDefinition: "천연 바닐라 향을 흉내 내기 위해 인공적으로 합성한 바닐린 향료입니다.",
    detailedDescription: "천연 바닐라 추출물은 매우 고가이므로, 대량 생산 초콜릿에는 석유 유래 성분이나 목재 부산물 등을 화학 합성하여 만든 저렴한 인공 향료가 주로 들어갑니다.",
    effectOnBody: "식품 첨가용 향료는 소량 들어 있어 보통 무해하지만, 일부 민감한 사람에게는 알레르기 반응이나 두통을 유발할 수 있습니다."
  },
  {
    name: "말티톨",
    chemicalName: "Maltitol",
    category: "sweetener",
    dangerLevel: "medium",
    simpleDefinition: "무설탕 초콜릿에 설탕 대용으로 주로 쓰는 당알코올 감미료입니다.",
    detailedDescription: "설탕 단맛의 약 90%를 내면서도 칼로리는 설탕의 절반 수준입니다. '제로 초콜릿' 타이틀을 단 대기업 제품에 널리 사용됩니다.",
    effectOnBody: "혈당 지수(GI)가 다른 대체 감미료(에리스리톨 등)에 비해 다소 높아 당뇨 환자는 섭취량 조절이 필요합니다. 또한 과량 섭취 시 설사, 복통 등 위장 장애를 유발합니다."
  },
  {
    name: "에리스리톨",
    chemicalName: "Erythritol",
    category: "sweetener",
    dangerLevel: "low",
    simpleDefinition: "칼로리와 혈당 지수가 전혀 없는 안전한 천연 당알코올 감미료입니다.",
    detailedDescription: "체내에 거의 흡수되지 않고 대부분 소변으로 배출되는 0kcal 감미료입니다. 설탕 단맛의 70% 정도를 내며 청량감을 주는 특징이 있습니다.",
    effectOnBody: "혈당을 올리지 않아 당뇨 환자나 다이어트에 유용하지만, 한 번에 너무 많이 먹으면 가스 팽만이나 가벼운 위장 장애가 생길 수 있습니다."
  },
  {
    name: "스테비올배당체",
    chemicalName: "Steviol Glycosides (Stevia)",
    category: "sweetener",
    dangerLevel: "low",
    simpleDefinition: "스테비아 허브 잎에서 추출한 칼로리가 없는 고감미 천연 대체 감미료입니다.",
    detailedDescription: "단맛이 설탕의 200~300배에 달하는 천연 감미료로, 칼로리가 없고 혈당에 영향을 미치지 않아 웰빙 초콜릿에 자주 배합됩니다. 끝맛이 약간 씁쓸한 특징이 있습니다.",
    effectOnBody: "천연 유래 성분으로 안전성이 높으며 혈압 조절 등에 도움을 줄 수 있으나, 특유의 향에 대한 호불호가 갈릴 수 있습니다."
  },
  {
    name: "아라비아검",
    chemicalName: "Gum Arabic",
    category: "other",
    dangerLevel: "low",
    simpleDefinition: "아카시아 나무 진액으로 만든 천연 점착제 및 안정제입니다.",
    detailedDescription: "초콜릿 볼(볼 형태 초콜릿) 표면에 다른 재료를 결합하거나, 광택을 내어 형태를 부드럽게 유지시키기 위해 외막 코팅용으로 자주 사용됩니다.",
    effectOnBody: "수용성 식이섬유의 일종으로 인체에 안전하며 오히려 장내 유익균 활성화에 도움을 주는 성분으로 평가받습니다."
  },
  {
    name: "피지피알",
    chemicalName: "Polyglycerol Polyricinoleate (PGPR)",
    category: "emulsifier",
    dangerLevel: "medium",
    simpleDefinition: "'폴리글리세린축합리시놀레인산에스테르'의 약칭이자 한국 식품 성분표 표기명입니다.",
    detailedDescription: "원재료명에 풀네임 대신 '피지피알'로 축약되어 기재되는 경우가 많습니다. 카카오버터를 줄여 가격을 낮추고 초콜릿 가공성을 높이는 대표적 합성 유화제입니다.",
    effectOnBody: "동일 성분인 '폴리글리세린축합리시놀레인산에스테르' 항목을 참고하세요. 화학 첨가물이므로 가급적 섭취를 최소화하는 것이 좋습니다."
  },
  {
    name: "쉘락",
    chemicalName: "Shellac",
    category: "other",
    dangerLevel: "medium",
    simpleDefinition: "곤충(락벌레)의 분비물로 만드는 광택용 천연 수지 코팅제입니다.",
    detailedDescription: "초콜릿 볼 과자 표면이 반짝반짝 빛나고 손에 묻지 않게 광택용 피막제로 코팅할 때 쓰입니다. 곤충의 분비물 성분이므로 엄격한 비건이나 채식주의자는 피해야 할 성분입니다.",
    effectOnBody: "천연 물질로서 식품 규정상 안전하게 관리되나, 곤충 기원 원료라는 점과 미량의 알레르기 반응 가능성을 인지하고 섭취하는 것이 좋습니다."
  }
];

// ==========================================
// 2. CHOCOLATE DATABASE (Expanded to 12 items)
// ==========================================
const chocolateData = [
  {
    id: "lotte-ghana-mild",
    name: "가나 마일드 초콜릿",
    manufacturer: "롯데웰푸드",
    origin: "국산",
    type: "milk",
    cocoaPercent: 20,
    hasCocoaButter: true,
    hasVegetableFat: true,
    sugarType: "sugar",
    sugarContentG: 16,
    servingSizeG: 30,
    caloriesKcal: 175,
    ingredients: ["설탕", "혼합분유", "카카오매스", "식물성유지", "카카오버터", "대두레시틴", "합성향료(바닐라향)"],
    additives: ["식물성유지", "대두레시틴", "합성향료"],
    imageUrl: "src/assets/milk_chocolate.png"
  },
  {
    id: "lotte-crunky",
    name: "크런키",
    manufacturer: "롯데웰푸드",
    origin: "국산",
    type: "milk",
    cocoaPercent: 18,
    hasCocoaButter: true,
    hasVegetableFat: true,
    sugarType: "sugar",
    sugarContentG: 18,
    servingSizeG: 34,
    caloriesKcal: 185,
    ingredients: ["설탕", "혼합분유", "식물성유지", "카카오매스", "퍼프드라이스(밀가루, 전분)", "카카오버터", "유당", "대두레시틴", "폴리글리세린축합리시놀레인산에스테르", "합성향료(바닐린)"],
    additives: ["식물성유지", "대두레시틴", "폴리글리세린축합리시놀레인산에스테르", "합성향료"],
    imageUrl: "src/assets/milk_chocolate.png"
  },
  {
    id: "lotte-dream-72",
    name: "드림카카오 72%",
    manufacturer: "롯데웰푸드",
    origin: "국산",
    type: "dark",
    cocoaPercent: 72,
    hasCocoaButter: true,
    hasVegetableFat: false,
    sugarType: "sugar",
    sugarContentG: 12,
    servingSizeG: 30,
    caloriesKcal: 170,
    ingredients: ["카카오매스", "설탕", "카카오버터", "카카오분말", "아라비아검", "대두레시틴", "쉘락", "합성향료(바닐라향)"],
    additives: ["대두레시틴", "아라비아검", "쉘락", "합성향료"],
    imageUrl: "src/assets/dark_chocolate.png"
  },
  {
    id: "lotte-dream-82",
    name: "드림카카오 82%",
    manufacturer: "롯데웰푸드",
    origin: "국산",
    type: "dark",
    cocoaPercent: 82,
    hasCocoaButter: true,
    hasVegetableFat: false,
    sugarType: "sugar",
    sugarContentG: 7,
    servingSizeG: 30,
    caloriesKcal: 178,
    ingredients: ["카카오매스", "설탕", "카카오버터", "카카오분말", "아라비아검", "대두레시틴", "쉘락", "합성향료(바닐라향)"],
    additives: ["대두레시틴", "아라비아검", "쉘락", "합성향료"],
    imageUrl: "src/assets/dark_chocolate.png"
  },
  {
    id: "lindt-excellence-70",
    name: "엑설런스 70% 다크 초콜릿",
    manufacturer: "린트 (Lindt)",
    origin: "수입",
    type: "dark",
    cocoaPercent: 70,
    hasCocoaButter: true,
    hasVegetableFat: false,
    sugarType: "sugar",
    sugarContentG: 8.7,
    servingSizeG: 30,
    caloriesKcal: 180,
    ingredients: ["카카오매스", "설탕", "카카오버터", "천연바닐라향"],
    additives: [],
    imageUrl: "src/assets/dark_chocolate.png"
  },
  {
    id: "lindt-excellence-85",
    name: "엑설런스 85% 다크 초콜릿",
    manufacturer: "린트 (Lindt)",
    origin: "수입",
    type: "dark",
    cocoaPercent: 85,
    hasCocoaButter: true,
    hasVegetableFat: false,
    sugarType: "sugar",
    sugarContentG: 4.5,
    servingSizeG: 30,
    caloriesKcal: 188,
    ingredients: ["카카오매스", "카카오버터", "저지방카카오분말", "설탕", "천연바닐라향"],
    additives: [],
    imageUrl: "src/assets/dark_chocolate.png"
  },
  {
    id: "lindt-excellence-99",
    name: "엑설런스 99% 다크 초콜릿",
    manufacturer: "린트 (Lindt)",
    origin: "수입",
    type: "dark",
    cocoaPercent: 99,
    hasCocoaButter: true,
    hasVegetableFat: false,
    sugarType: "sugar",
    sugarContentG: 0.3,
    servingSizeG: 30,
    caloriesKcal: 190,
    ingredients: ["카카오매스", "카카오분말", "카카오버터", "설탕"],
    additives: [],
    imageUrl: "src/assets/dark_chocolate.png"
  },
  {
    id: "hersheys-milk",
    name: "허쉬 밀크 초콜릿",
    manufacturer: "허쉬 (Hershey's)",
    origin: "수입",
    type: "milk",
    cocoaPercent: 15,
    hasCocoaButter: true,
    hasVegetableFat: false,
    sugarType: "sugar",
    sugarContentG: 16,
    servingSizeG: 30,
    caloriesKcal: 160,
    ingredients: ["설탕", "무지방우유", "카카오매스", "카카오버터", "유지방", "대두레시틴", "폴리글리세린축합리시놀레인산에스테르", "합성향료(바닐린)"],
    additives: ["대두레시틴", "폴리글리세린축합리시놀레인산에스테르", "합성향료"],
    imageUrl: "src/assets/milk_chocolate.png"
  },
  {
    id: "hersheys-cookies-creme",
    name: "허쉬 쿠키앤크림 초콜릿",
    manufacturer: "허쉬 (Hershey's)",
    origin: "수입",
    type: "white",
    cocoaPercent: 0,
    hasCocoaButter: true,
    hasVegetableFat: true,
    sugarType: "sugar",
    sugarContentG: 19,
    servingSizeG: 30,
    caloriesKcal: 162,
    ingredients: ["설탕", "식물성유지(팜유, 야자유)", "무지방우유", "유당", "밀가루", "카카오버터", "대두레시틴", "폴리글리세린축합리시놀레인산에스테르", "팽창제", "합성향료(바닐라향)"],
    additives: ["식물성유지", "대두레시틴", "폴리글리세린축합리시놀레인산에스테르", "합성향료"],
    imageUrl: "src/assets/white_chocolate.png"
  },
  {
    id: "lindt-white-coconut",
    name: "엑설런스 화이트 코코넛 초콜릿",
    manufacturer: "린트 (Lindt)",
    origin: "수입",
    type: "white",
    cocoaPercent: 0,
    hasCocoaButter: true,
    hasVegetableFat: false,
    sugarType: "sugar",
    sugarContentG: 15,
    servingSizeG: 30,
    caloriesKcal: 175,
    ingredients: ["설탕", "카카오버터", "전지분유", "건조코코넛", "무지방우유", "대두레시틴", "천연향료"],
    additives: ["대두레시틴", "천연향료"],
    imageUrl: "src/assets/white_chocolate.png"
  },
  {
    id: "toblerone-milk",
    name: "토블론 밀크 초콜릿",
    manufacturer: "토블론 (Toblerone)",
    origin: "수입",
    type: "milk",
    cocoaPercent: 28,
    hasCocoaButter: true,
    hasVegetableFat: false,
    sugarType: "sugar",
    sugarContentG: 18,
    servingSizeG: 30,
    caloriesKcal: 158,
    ingredients: ["설탕", "전지분유", "카카오버터", "카카오매스", "벌꿀", "유지방", "아몬드", "대두레시틴", "달걀흰자분말", "합성향료(바닐라향)"],
    additives: ["대두레시틴", "합성향료"],
    imageUrl: "src/assets/milk_chocolate.png"
  },
  {
    id: "lotte-zero-cacao",
    name: "제로 카카오 케이크 초콜릿",
    manufacturer: "롯데웰푸드",
    origin: "국산",
    type: "sugar-free",
    cocoaPercent: 30,
    hasCocoaButter: true,
    hasVegetableFat: true,
    sugarType: "alternative",
    sugarContentG: 0,
    servingSizeG: 30,
    caloriesKcal: 140,
    ingredients: ["말티톨", "카카오매스", "식물성유지", "혼합분유", "카카오버터", "대두레시틴", "폴리글리세린축합리시놀레인산에스테르", "합성향료"],
    additives: ["말티톨", "식물성유지", "대두레시틴", "폴리글리세린축합리시놀레인산에스테르", "합성향료"],
    imageUrl: "src/assets/assorted_chocolate.png"
  }
];

// ==========================================
// 3. SCORING UTILITIES (src/utils/scoring.js)
// ==========================================
function calculateChocolateScore(chocolate) {
  let cocoaScore = 0;
  let sugarScore = 0;
  let additiveScore = 0;
  
  if (!chocolate.hasVegetableFat) {
    cocoaScore = 40;
  } else if (chocolate.hasCocoaButter && chocolate.hasVegetableFat) {
    cocoaScore = 15;
  } else {
    cocoaScore = 0;
  }
  
  if (chocolate.sugarType === 'alternative' || chocolate.sugarType === 'none') {
    sugarScore = 30;
  } else {
    const sugarRatio = chocolate.sugarContentG / chocolate.servingSizeG;
    if (sugarRatio <= 0.15) {
      sugarScore = 30;
    } else if (sugarRatio <= 0.30) {
      sugarScore = 20;
    } else if (sugarRatio <= 0.50) {
      sugarScore = 10;
    } else {
      sugarScore = 0;
    }
  }
  
  const uniqueAdditives = chocolate.additives.filter(a => a !== '식물성유지');
  const additiveCount = uniqueAdditives.length;
  
  if (additiveCount === 0) {
    additiveScore = 30;
  } else if (additiveCount <= 2) {
    additiveScore = 20;
  } else if (additiveCount <= 4) {
    additiveScore = 10;
  } else {
    additiveScore = 0;
  }
  
  const totalScore = cocoaScore + sugarScore + additiveScore;
  
  let grade = 'F';
  let gradeLabel = 'Imitation Sweet';
  let gradeColorClass = 'grade-F';
  
  if (totalScore >= 95) {
    grade = 'A+';
    gradeLabel = 'Pure Premium';
    gradeColorClass = 'grade-A-plus';
  } else if (totalScore >= 90) {
    grade = 'A';
    gradeLabel = 'Premium';
    gradeColorClass = 'grade-A';
  } else if (totalScore >= 85) {
    grade = 'B+';
    gradeLabel = 'High Quality';
    gradeColorClass = 'grade-B-plus';
  } else if (totalScore >= 75) {
    grade = 'B';
    gradeLabel = 'Good Choice';
    gradeColorClass = 'grade-B';
  } else if (totalScore >= 65) {
    grade = 'C+';
    gradeLabel = 'Average Quality';
    gradeColorClass = 'grade-C-plus';
  } else if (totalScore >= 55) {
    grade = 'C';
    gradeLabel = 'Average';
    gradeColorClass = 'grade-C';
  } else if (totalScore >= 45) {
    grade = 'D+';
    gradeLabel = 'Highly Processed';
    gradeColorClass = 'grade-D-plus';
  } else if (totalScore >= 35) {
    grade = 'D';
    gradeLabel = 'Processed Sweet';
    gradeColorClass = 'grade-D';
  } else {
    grade = 'F';
    gradeLabel = 'Imitation Sweet';
    gradeColorClass = 'grade-F';
  }
  
  return {
    totalScore,
    grade,
    gradeLabel,
    gradeColorClass,
    breakdown: {
      cocoa: {
        score: cocoaScore,
        max: 40,
        status: !chocolate.hasVegetableFat ? '우수 (천연 카카오버터 100%)' : (chocolate.hasCocoaButter ? '보통 (카카오버터 + 식물성유지 혼합)' : '주의 (식물성유지 대체)')
      },
      sugar: {
        score: sugarScore,
        max: 30,
        status: chocolate.sugarType === 'alternative' ? '대체당 사용 (당류 0g)' : `당류 비율 ${Math.round((chocolate.sugarContentG / chocolate.servingSizeG) * 100)}%`
      },
      additives: {
        score: additiveScore,
        max: 30,
        status: additiveCount === 0 ? '깨끗함 (합성 첨가물 없음)' : `첨가물 ${additiveCount}개 검출`
      }
    }
  };
}

// ==========================================
// 4. COMPONENTS (Header, SearchBar, Card, etc)
// ==========================================
function Header() {
  return `
    <header>
      <div class="container logo-section">
        <h1 class="font-serif">CHOCOLATIER</h1>
        <p>알고 먹는 달콤함 — 초콜릿 영양 성분 분석 & 비교</p>
      </div>
    </header>
  `;
}

function SearchBar(state) {
  const { searchQuery, activeCategory, cocoaButterOnly, selectedCount } = state;
  
  const categories = [
    { id: 'all', label: '전체' },
    { id: 'dark', label: '다크 초콜릿' },
    { id: 'milk', label: '밀크 초콜릿' },
    { id: 'white', label: '화이트 초콜릿' },
    { id: 'sugar-free', label: '대체 감미료(제로)' }
  ];
  
  const categoryButtons = categories.map(cat => {
    const isActive = activeCategory === cat.id;
    return `
      <button 
        class="filter-btn ${isActive ? 'active' : ''}" 
        data-category="${cat.id}"
      >
        ${cat.label}
      </button>
    `;
  }).join('');
  
  return `
    <section class="container">
      <div class="search-filter-panel glass-panel">
        <div class="search-box-wrapper">
          <i data-lucide="search" class="search-icon"></i>
          <input 
            type="text" 
            id="chocolate-search" 
            class="search-input" 
            placeholder="초콜릿 제품명 또는 제조사를 검색해보세요..." 
            value="${searchQuery}"
            autocomplete="off"
          />
        </div>
        
        <div class="filter-row">
          <div class="category-filters" id="category-filter-container">
            ${categoryButtons}
          </div>
          
          <div class="toggle-filter-wrapper">
            <label class="checkbox-label">
              <input 
                type="checkbox" 
                id="cocoa-butter-only-toggle" 
                ${cocoaButterOnly ? 'checked' : ''}
              />
              <span>천연 카카오버터 100% 제품만 보기</span>
            </label>
            
            <div class="selection-summary">
              <i data-lucide="columns" style="width: 16px; height: 16px; display: inline; vertical-align: middle; margin-right: 4px;"></i>
              비교함: <span id="selected-count-badge" style="font-weight: 700;">${selectedCount}</span> / 3개 선택됨
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function ChocolateCard(chocolate, isSelected) {
  const { totalScore, grade, gradeLabel, gradeColorClass } = calculateChocolateScore(chocolate);
  
  let qualityBadgeHTML = '';
  if (!chocolate.hasVegetableFat) {
    qualityBadgeHTML = `
      <span class="cocoa-butter-status status-safe">
        <i data-lucide="shield-check" style="width: 14px; height: 14px; margin-right: 4px;"></i>진짜 초콜릿
      </span>
    `;
  } else {
    qualityBadgeHTML = `
      <span class="cocoa-butter-status status-danger">
        <i data-lucide="alert-triangle" style="width: 14px; height: 14px; margin-right: 4px;"></i>준초콜릿 (식물성유지)
      </span>
    `;
  }
  
  const sugarRatio = Math.round((chocolate.sugarContentG / chocolate.servingSizeG) * 100);
  const sugarText = chocolate.sugarType === 'alternative' 
    ? '대체당 (당류 0g)' 
    : `당류 ${chocolate.sugarContentG}g (${sugarRatio}%)`;
  
  return `
    <article class="glass-panel chocolate-card" data-id="${chocolate.id}">
      <div class="card-header-image" style="background-image: url('${chocolate.imageUrl}');">
        <span class="manufacturer-badge">${chocolate.manufacturer}</span>
        <div class="quality-grade-badge ${gradeColorClass}" title="품질/건강 등급: ${gradeLabel} (${totalScore}점)">
          ${grade}
        </div>
      </div>
      
      <div class="card-body">
        <h3 class="chocolate-title">${chocolate.name}</h3>
        
        <div class="card-info-row">
          <span class="card-info-label">원료 등급</span>
          <span class="card-info-value">${qualityBadgeHTML}</span>
        </div>
        
        <div class="card-info-row">
          <span class="card-info-label">카카오 함량</span>
          <span class="card-info-value" style="font-weight:600; color: var(--color-gold-bright);">${chocolate.cocoaPercent}%</span>
        </div>
        
        <div class="card-info-row">
          <span class="card-info-label">당류 비율</span>
          <span class="card-info-value">${sugarText}</span>
        </div>
        
        <div class="card-info-row">
          <span class="card-info-label">칼로리</span>
          <span class="card-info-value">${chocolate.caloriesKcal} kcal (${chocolate.servingSizeG}g)</span>
        </div>
        
        <div class="card-actions">
          <label class="checkbox-label" style="font-size: 0.85rem;">
            <input 
              type="checkbox" 
              class="compare-checkbox" 
              data-id="${chocolate.id}" 
              ${isSelected ? 'checked' : ''}
            />
            <span>비교하기</span>
          </label>
          
          <button class="btn-detail" data-id="${chocolate.id}">
            상세 성분분석
            <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}

function DetailModal(chocolate) {
  if (!chocolate) {
    return `<div class="modal-backdrop" id="product-detail-modal"></div>`;
  }
  
  const { totalScore, grade, gradeLabel, gradeColorClass, breakdown } = calculateChocolateScore(chocolate);
  
  let qualityBadgeHTML = '';
  if (!chocolate.hasVegetableFat) {
    qualityBadgeHTML = `
      <span class="cocoa-butter-status status-safe">
        <i data-lucide="shield-check" style="width: 14px; height: 14px; margin-right: 4px;"></i>진짜 초콜릿 (천연 카카오버터 100%)
      </span>
    `;
  } else {
    qualityBadgeHTML = `
      <span class="cocoa-butter-status status-danger">
        <i data-lucide="alert-triangle" style="width: 14px; height: 14px; margin-right: 4px;"></i>준초콜릿 (식물성유지 가공)
      </span>
    `;
  }
  
  const ingredientChips = chocolate.ingredients.map(ing => {
    const glossaryMatch = glossaryData.find(g => ing.includes(g.name) || g.name.includes(ing));
    
    let chipClass = '';
    let dataAttr = '';
    
    if (glossaryMatch) {
      dataAttr = `data-glossary-target="${glossaryMatch.name}"`;
      if (glossaryMatch.dangerLevel === 'low') {
        chipClass = 'additive-safe';
      } else if (glossaryMatch.dangerLevel === 'medium') {
        chipClass = 'additive-warning';
      } else if (glossaryMatch.dangerLevel === 'high') {
        chipClass = 'additive-danger';
      }
    }
    
    return `
      <span 
        class="ingredient-chip ${chipClass} ${glossaryMatch ? 'has-glossary' : ''}" 
        ${dataAttr}
        title="${glossaryMatch ? `${glossaryMatch.name} (사전 연결됨 - 클릭 시 이동)` : '일반 식품 원재료'}"
      >
        ${ing}
        ${glossaryMatch ? '<i data-lucide="help-circle" style="width:11px; height:11px; display:inline-block; margin-left:2px; vertical-align:middle;"></i>' : ''}
      </span>
    `;
  }).join('');
  
  return `
    <div class="modal-backdrop active" id="product-detail-modal">
      <div class="modal-window">
        <button class="modal-close-btn" id="modal-close-button">
          <i data-lucide="x" style="width:24px; height:24px;"></i>
        </button>
        
        <div class="modal-header">
          <div class="manufacturer">${chocolate.manufacturer} (${chocolate.origin})</div>
          <h2>${chocolate.name}</h2>
          <div class="type-badge">구분: ${chocolate.type === 'dark' ? '다크 초콜릿' : chocolate.type === 'milk' ? '밀크 초콜릿' : chocolate.type === 'white' ? '화이트 초콜릿' : '대체감미 초콜릿'}</div>
        </div>
        
        <div class="score-box-premium">
          <div class="score-value ${gradeColorClass}">${grade}</div>
          <div class="score-details">
            <h4 class="font-serif">Chocolatier 등급: ${gradeLabel}</h4>
            <p>100점 만점 기준 자체 평가 결과 <strong>${totalScore}점</strong>을 기록했습니다.</p>
          </div>
        </div>
        
        <div style="margin-bottom: 30px;">
          <h3 class="section-title">
            <i data-lucide="activity" style="color: var(--color-gold); width:18px; height:18px;"></i>
            등급 세부 진단
          </h3>
          <div style="display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; justify-content:space-between; align-items:center; background: rgba(255,255,255,0.02); padding: 10px 14px; border-radius:6px; border-left: 3px solid ${chocolate.hasVegetableFat ? 'var(--color-danger)' : 'var(--color-safe)'}">
              <div>
                <strong style="display:block; font-size:0.9rem;">카카오 품질 지수</strong>
                <span style="font-size:0.75rem; color:var(--text-muted);">${breakdown.cocoa.status}</span>
              </div>
              <span style="font-weight:600; color: var(--text-primary);">${breakdown.cocoa.score} / ${breakdown.cocoa.max}점</span>
            </div>
            
            <div style="display:flex; justify-content:space-between; align-items:center; background: rgba(255,255,255,0.02); padding: 10px 14px; border-radius:6px; border-left: 3px solid ${chocolate.sugarType === 'alternative' ? 'var(--color-safe)' : 'var(--color-warning)'}">
              <div>
                <strong style="display:block; font-size:0.9rem;">당류 위험도 지수</strong>
                <span style="font-size:0.75rem; color:var(--text-muted);">${breakdown.sugar.status}</span>
              </div>
              <span style="font-weight:600; color: var(--text-primary);">${breakdown.sugar.score} / ${breakdown.sugar.max}점</span>
            </div>
            
            <div style="display:flex; justify-content:space-between; align-items:center; background: rgba(255,255,255,0.02); padding: 10px 14px; border-radius:6px; border-left: 3px solid ${breakdown.additives.score === 30 ? 'var(--color-safe)' : 'var(--color-warning)'}">
              <div>
                <strong style="display:block; font-size:0.9rem;">첨가물 청정도 지수</strong>
                <span style="font-size:0.75rem; color:var(--text-muted);">${breakdown.additives.status}</span>
              </div>
              <span style="font-weight:600; color: var(--text-primary);">${breakdown.additives.score} / ${breakdown.additives.max}점</span>
            </div>
          </div>
        </div>
        
        <div style="margin-bottom: 30px;">
          <h3 class="section-title">
            <i data-lucide="scale" style="color: var(--color-gold); width:18px; height:18px;"></i>
            기본 영양 성분표
          </h3>
          <div class="nutrition-grid">
            <div class="nutrition-item">
              <span class="label">총 중량</span>
              <span class="value">${chocolate.servingSizeG}g</span>
            </div>
            <div class="nutrition-item">
              <span class="label">열량</span>
              <span class="value">${chocolate.caloriesKcal}kcal</span>
            </div>
            <div class="nutrition-item">
              <span class="label">카카오 비율</span>
              <span class="value">${chocolate.cocoaPercent}%</span>
            </div>
            <div class="nutrition-item">
              <span class="label">당류 함량</span>
              <span class="value">${chocolate.sugarContentG}g</span>
            </div>
          </div>
        </div>
        
        <div class="ingredients-section">
          <h3 class="section-title">
            <i data-lucide="clipboard-list" style="color: var(--color-gold); width:18px; height:18px;"></i>
            원재료명 분석
          </h3>
          <p style="font-size:0.8rem; color: var(--text-muted); margin-bottom: 12px; line-height: 1.4;">
            💡 아래의 원재료 중 <span style="color:var(--color-warning); font-weight:600;">오렌지색</span> 및 <span style="color:var(--color-danger); font-weight:600;">붉은색</span> 꼬리표가 붙은 성분(물음표 아이콘 표시)을 누르시면, 하단의 성분 사전으로 즉시 이동하여 쉬운 설명을 확인하실 수 있습니다.
          </p>
          <div class="ingredient-chips-container">
            ${ingredientChips}
          </div>
        </div>
      </div>
    </div>
  `;
}

function getAnalysisComment(chocolate, totalScore) {
  if (totalScore >= 90) {
    return '✨ <strong>최상급 프리미엄</strong>: 천연 카카오버터만 사용하고 첨가물이 없으며 당류가 매우 적은 완벽한 건강식 다크 초콜릿입니다.';
  }
  if (chocolate.type === 'sugar-free') {
    return '⚖️ <strong>제로 초콜릿의 타협</strong>: 설탕은 없으나 감미료와 식물성유지를 포함하고 있어 가벼운 입가심용으로 적당하나 다량 섭취 시 배앓이에 주의해야 합니다.';
  }
  if (chocolate.hasVegetableFat) {
    return '⚠️ <strong>가공성 중심 (준초콜릿)</strong>: 가격을 낮추기 위해 카카오버터 대신 식물성유지(포화지방이 높음)와 설탕을 대량 배합한 저가형 가공 초콜릿입니다.';
  }
  if (chocolate.cocoaPercent >= 70) {
    return '🍫 <strong>우수한 웰빙 다크</strong>: 카카오버터 100%에 적절한 단맛을 조화시켜 데일리 간식 및 카카오 효능 섭취용으로 아주 훌륭합니다.';
  }
  return '🥛 <strong>부드러운 밀크 초콜릿</strong>: 유제품 성분으로 고소하지만 설탕 함량이 높은 편이므로 적정량만 즐기시는 것을 권장합니다.';
}

function ComparisonView(selectedChocolates) {
  if (selectedChocolates.length === 0) {
    return `
      <section class="container comparison-section">
        <div class="glass-panel comparison-card" style="text-align: center; padding: 40px 20px;">
          <i data-lucide="scale" style="width: 48px; height: 48px; color: var(--text-muted); margin-bottom: 16px;"></i>
          <h2 class="font-serif" style="font-size: 1.5rem; margin-bottom: 8px;">제품 비교 분석기</h2>
          <p style="color: var(--text-muted); max-width: 500px; margin: 0 auto; font-size: 0.9rem; line-height:1.5;">
            위의 제품 카드에서 <strong>[비교하기]</strong> 체크박스를 선택해 주세요. <br/>
            최대 3개의 제품을 골라 당류 함량, 첨가물, 그리고 카카오 품질을 병렬로 상세하게 비교할 수 있습니다.
          </p>
        </div>
      </section>
    `;
  }
  
  if (selectedChocolates.length === 1) {
    return `
      <section class="container comparison-section">
        <div class="glass-panel comparison-card" style="text-align: center; padding: 40px 20px;">
          <i data-lucide="scale" style="width: 48px; height: 48px; color: var(--color-gold); margin-bottom: 16px;"></i>
          <h2 class="font-serif" style="font-size: 1.5rem; margin-bottom: 8px;">1개 제품이 더 필요합니다</h2>
          <p style="color: var(--text-muted); max-width: 500px; margin: 0 auto; font-size: 0.9rem; line-height:1.5;">
            현재 1개 제품만 선택되어 있습니다. <br/>
            비교 분석을 하려면 위의 초콜릿 목록에서 <strong>최소 1개 제품을 더 추가로 선택</strong>해 주세요. (최대 3개)
          </p>
        </div>
      </section>
    `;
  }
  
  const productColsHTML = selectedChocolates.map(choc => {
    const { totalScore, grade, gradeLabel, gradeColorClass } = calculateChocolateScore(choc);
    
    const butterHTML = !choc.hasVegetableFat
      ? `<span class="cocoa-butter-status status-safe" style="font-size:0.8rem;"><i data-lucide="shield-check" style="width:12px; height:12px;"></i>카카오버터 100%</span>`
      : `<span class="cocoa-butter-status status-danger" style="font-size:0.8rem;"><i data-lucide="alert-triangle" style="width:12px; height:12px;"></i>식물성유지 사용</span>`;
      
    const cocoaBarHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; width:100%; gap:4px;">
        <span style="font-weight:600; color:var(--color-gold-bright);">${choc.cocoaPercent}%</span>
        <div class="sugar-bar-chart">
          <div class="sugar-bar-fill" style="width: ${choc.cocoaPercent}%; background: linear-gradient(to right, var(--color-gold-dark), var(--color-gold));"></div>
        </div>
      </div>
    `;
    
    const sugarRatio = Math.round((choc.sugarContentG / choc.servingSizeG) * 100);
    const sugarColor = sugarRatio > 50 ? 'var(--color-danger)' : sugarRatio > 25 ? 'var(--color-warning)' : 'var(--color-safe)';
    const sugarText = choc.sugarType === 'alternative' ? '0g (대체당)' : `${choc.sugarContentG}g (${sugarRatio}%)`;
    const sugarBarHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; width:100%; gap:4px;">
        <span style="font-weight:600; color:${sugarColor};">${sugarText}</span>
        <div class="sugar-bar-chart">
          <div class="sugar-bar-fill" style="width: ${choc.sugarType === 'alternative' ? 0 : Math.min(100, sugarRatio * 1.5)}%; background: ${sugarColor};"></div>
        </div>
      </div>
    `;
    
    const additiveBadgesHTML = choc.additives.map(add => {
      let dClass = 'danger-medium';
      if (add === '식물성유지' || add === '폴리글리세린축합리시놀레인산에스테르' || add === '피지피알') {
        dClass = 'danger-high';
      } else if (add === '대두레시틴' || add === '에리스리톨' || add === '아라비아검') {
        dClass = 'danger-low';
      }
      return `<span class="danger-badge ${dClass}" style="margin: 2px; font-size:0.7rem; display:inline-block; max-width: 140px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${add}">${add}</span>`;
    }).join('') || `<span style="color:var(--color-safe); font-size:0.85rem;">첨가물 없음 (클린)</span>`;
    
    const commentHTML = getAnalysisComment(choc, totalScore);

    return `
      <div class="compare-col-product">
        <div style="border-bottom: 1px solid rgba(212, 175, 55, 0.2); padding-bottom: 12px; margin-bottom: 12px;">
          <span style="font-size:0.75rem; color:var(--text-muted); display:block; text-transform:uppercase;">${choc.manufacturer}</span>
          <h3 class="compare-product-title">${choc.name}</h3>
          
          <div style="display:inline-flex; align-items:center; gap:8px; margin-top:8px;">
            <div class="quality-grade-badge ${gradeColorClass}" style="position:static; width:36px; height:36px; font-size:1rem; border-width:1px;">
              ${grade}
            </div>
            <span style="font-size:0.85rem; font-weight:600; color:var(--text-primary);">${totalScore}점</span>
          </div>
        </div>
        
        <div class="compare-value-row">${butterHTML}</div>
        <div class="compare-value-row">${cocoaBarHTML}</div>
        <div class="compare-value-row">${sugarBarHTML}</div>
        <div class="compare-value-row" style="font-size:0.85rem; color:var(--text-primary);">${choc.caloriesKcal} kcal / ${choc.servingSizeG}g</div>
        <div class="compare-value-row" style="height: auto; min-height: 60px; padding: 10px 0; flex-direction: row; flex-wrap: wrap; align-content: center; gap: 4px;">
          ${additiveBadgesHTML}
        </div>
        <div class="compare-value-row" style="height: auto; min-height: 100px; padding: 12px 6px; font-size:0.8rem; text-align:left; line-height:1.4; color:var(--text-secondary); align-items: flex-start; justify-content: flex-start;">
          ${commentHTML}
        </div>
      </div>
    `;
  }).join('');
  
  return `
    <section class="container comparison-section" id="comparison-dashboard-wrapper">
      <h2 class="section-title" style="font-size: 1.8rem; margin-bottom: 24px;">
        <i data-lucide="scale" style="color: var(--color-gold); width:28px; height:28px; vertical-align:middle;"></i>
        비교 분석 대시보드
      </h2>
      
      <div class="glass-panel comparison-card">
        <div class="compare-grid-header">
          <span style="font-size: 0.95rem; font-weight:500;">
            선택된 초콜릿 <span style="color:var(--color-gold); font-weight:700;">${selectedChocolates.length}개</span> 성분 정밀 분석 중
          </span>
          <button id="clear-compare-btn" style="background:transparent; border:none; color:var(--color-danger); cursor:pointer; font-size:0.85rem; font-weight:600; display:flex; align-items:center; gap:4px;">
            <i data-lucide="trash-2" style="width:14px; height:14px;"></i>비교함 비우기
          </button>
        </div>
        
        <div class="compare-grid">
          <div class="compare-col-label">
            <div style="height: 106px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);"></div>
            <div class="compare-label-row">원료 등급 (유지 분석)</div>
            <div class="compare-label-row">카카오 고형분 함량</div>
            <div class="compare-label-row">제공량당 당류 비율</div>
            <div class="compare-label-row">제공량당 칼로리</div>
            <div class="compare-label-row">주요 검출 첨가물</div>
            <div class="compare-label-row" style="min-height: 100px;">종합 영양 분석평</div>
          </div>
          
          ${productColsHTML}
        </div>
      </div>
    </section>
  `;
}

function GlossaryView() {
  const cards = glossaryData.map(item => {
    let dangerClass = 'danger-low';
    let dangerLabel = '안전 (낮음)';
    if (item.dangerLevel === 'medium') {
      dangerClass = 'danger-medium';
      dangerLabel = '보통';
    } else if (item.dangerLevel === 'high') {
      dangerClass = 'danger-high';
      dangerLabel = '주의 (높음)';
    }

    const categoryMap = {
      fat: '유지류 (지방)',
      emulsifier: '유화제',
      sweetener: '감미료',
      flavor: '향료',
      other: '기타 첨가물'
    };
    const categoryName = categoryMap[item.category] || '첨가물';

    return `
      <div class="glossary-card glass-panel" id="glossary-card-${item.name}" data-name="${item.name}">
        <div class="glossary-card-header">
          <div>
            <h4 class="glossary-term">${item.name}</h4>
            ${item.chemicalName ? `<span class="glossary-chemical">${item.chemicalName}</span>` : ''}
          </div>
          <span class="danger-badge ${dangerClass}">${dangerLabel}</span>
        </div>
        
        <p class="glossary-definition">${item.simpleDefinition}</p>
        
        <div class="glossary-details">
          <div>
            <span style="color: var(--color-gold); font-weight:600;">분류:</span> ${categoryName}
          </div>
          <div>
            <span style="color: var(--color-gold); font-weight:600;">사용 목적:</span> ${item.detailedDescription}
          </div>
          <div style="margin-top: 4px; line-height:1.4;">
            <span style="color: var(--color-gold); font-weight:600;">건강 영향:</span> ${item.effectOnBody}
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="container" style="margin-top: 60px;" id="glossary-section-wrapper">
      <h2 class="section-title" style="font-size: 1.8rem; margin-bottom: 24px;">
        <i data-lucide="book-open" style="color: var(--color-gold); width:28px; height:28px; vertical-align:middle;"></i>
        초콜릿 성분 백과사전
      </h2>
      <p style="color: var(--text-muted); margin-top: -16px; margin-bottom: 24px; font-size: 0.95rem;">
        초콜릿 뒷면 영양 성분표와 원재료명에 적힌 생소한 단어들의 진짜 의미와 건강에 미치는 영향을 쉽게 해설합니다. (원재료 클릭 시 즉시 연결됩니다.)
      </p>
      
      <div class="glossary-grid">
        ${cards}
      </div>
    </section>
  `;
}

// ==========================================
// 5. APPLICATION STATE & ORCHESTRATOR
// ==========================================
const state = {
  chocolates: chocolateData,
  searchQuery: '',
  activeCategory: 'all',
  cocoaButterOnly: false,
  selectedCompareIds: [],
  activeDetailId: null
};

function renderApp() {
  // A. Filter chocolates based on state
  const filteredChocolates = state.chocolates.filter(choc => {
    const matchesSearch = choc.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          choc.manufacturer.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          choc.ingredients.some(ing => ing.toLowerCase().includes(state.searchQuery.toLowerCase()));
    
    let matchesCategory = true;
    if (state.activeCategory !== 'all') {
      matchesCategory = choc.type === state.activeCategory;
    }
    
    let matchesCocoaButter = true;
    if (state.cocoaButterOnly) {
      matchesCocoaButter = !choc.hasVegetableFat;
    }
    
    return matchesSearch && matchesCategory && matchesCocoaButter;
  });

  // B. Render grid elements
  const gridMount = document.getElementById('chocolate-grid-mount');
  if (filteredChocolates.length > 0) {
    gridMount.innerHTML = filteredChocolates.map(choc => {
      const isSelected = state.selectedCompareIds.includes(choc.id);
      return ChocolateCard(choc, isSelected);
    }).join('');
  } else {
    gridMount.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 8px; color: var(--color-warning);"></i>
        <p>검색 조건에 맞는 초콜릿 제품이 존재하지 않습니다.</p>
        <span style="font-size:0.85rem;">다른 검색어를 입력하시거나 카테고리 필터를 변경해 보세요.</span>
      </div>
    `;
  }

  // C. Update Comparison View
  const comparisonMount = document.getElementById('comparison-mount');
  const selectedChocolates = state.chocolates.filter(choc => state.selectedCompareIds.includes(choc.id));
  comparisonMount.innerHTML = ComparisonView(selectedChocolates);

  // D. Update SearchBar indicators (selected count and category active classes)
  // Instead of rewriting the entire search bar HTML (which breaks Korean typing/composition),
  // we update specific DOM elements.
  const activeBtn = document.querySelector(`#category-filter-container .filter-btn[data-category="${state.activeCategory}"]`);
  if (activeBtn) {
    document.querySelectorAll('#category-filter-container .filter-btn').forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
  }

  const selectedCountBadge = document.getElementById('selected-count-badge');
  if (selectedCountBadge) {
    selectedCountBadge.textContent = state.selectedCompareIds.length;
  }

  const cocoaButterToggle = document.getElementById('cocoa-butter-only-toggle');
  if (cocoaButterToggle) {
    cocoaButterToggle.checked = state.cocoaButterOnly;
  }

  // E. Render Modal
  const modalMount = document.getElementById('modal-mount');
  const activeChoc = state.chocolates.find(choc => choc.id === state.activeDetailId);
  modalMount.innerHTML = DetailModal(activeChoc);

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initializeApp() {
  const root = document.getElementById('app');
  root.innerHTML = `
    <div class="app-wrapper">
      <div id="header-mount"></div>
      <div id="searchbar-mount"></div>
      
      <main class="container">
        <h2 class="section-title" style="font-size:1.8rem; margin-bottom:20px; display:flex; align-items:center; gap:8px;">
          <i data-lucide="cookie" style="color:var(--color-gold); width:28px; height:28px; vertical-align:middle;"></i>
          초콜릿 성분 탐색기
        </h2>
        <p style="color: var(--text-muted); margin-top:-14px; margin-bottom:24px; font-size:0.95rem;">
          대중적인 국산/수입 초콜릿을 탐색하고 영양 성분을 분석해보세요. 제품 카드에서 등급 및 카카오 원료 품질을 한눈에 볼 수 있습니다.
        </p>
        <div class="chocolate-grid" id="chocolate-grid-mount"></div>
      </main>
      
      <div id="comparison-mount"></div>
      
      <div id="glossary-mount"></div>
      
      <div id="modal-mount"></div>
      
      <footer>
        <div class="container">
          <p style="margin-bottom: 8px;">&copy; 2026 Chocolatier. All Rights Reserved. Designed for Healthy Sweetness.</p>
          <span style="font-size:0.75rem; color: var(--text-muted);">본 분석 데이터는 시뮬레이션된 정보로, 제품 구매 전 실제 패키지 뒷면 성분표를 최종 확인하시기 바랍니다.</span>
        </div>
      </footer>
    </div>
  `;

  // Render static components once
  document.getElementById('header-mount').innerHTML = Header();
  document.getElementById('searchbar-mount').innerHTML = SearchBar(state);
  document.getElementById('glossary-mount').innerHTML = GlossaryView();

  renderApp();
  setupEventListeners();
}

function setupEventListeners() {
  const root = document.getElementById('app');

  // Handle live search inputs (preserves focus and composition naturally)
  root.addEventListener('input', (e) => {
    if (e.target.id === 'chocolate-search') {
      state.searchQuery = e.target.value;
      renderApp();
    }
  });

  root.addEventListener('click', (e) => {
    const categoryBtn = e.target.closest('.filter-btn');
    if (categoryBtn) {
      state.activeCategory = categoryBtn.dataset.category;
      renderApp();
    }
  });

  root.addEventListener('change', (e) => {
    if (e.target.id === 'cocoa-butter-only-toggle') {
      state.cocoaButterOnly = e.target.checked;
      renderApp();
    }
  });

  root.addEventListener('change', (e) => {
    if (e.target.classList.contains('compare-checkbox')) {
      const chocId = e.target.dataset.id;
      const isChecked = e.target.checked;
      
      if (isChecked) {
        if (state.selectedCompareIds.length >= 3) {
          alert('초콜릿 제품 비교는 최대 3개까지만 가능합니다.');
          e.target.checked = false;
        } else {
          state.selectedCompareIds.push(chocId);
        }
      } else {
        state.selectedCompareIds = state.selectedCompareIds.filter(id => id !== chocId);
      }
      renderApp();
    }
  });

  root.addEventListener('click', (e) => {
    const detailBtn = e.target.closest('.btn-detail');
    if (detailBtn) {
      state.activeDetailId = detailBtn.dataset.id;
      renderApp();
    }
  });

  root.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('#modal-close-button');
    const backdrop = e.target.id === 'product-detail-modal';
    
    if (closeBtn || backdrop) {
      state.activeDetailId = null;
      renderApp();
    }
  });

  root.addEventListener('click', (e) => {
    const ingredientChip = e.target.closest('.ingredient-chip.has-glossary');
    if (ingredientChip) {
      const targetGlossaryName = ingredientChip.dataset.glossaryTarget;
      
      state.activeDetailId = null;
      renderApp();
      
      const targetCard = document.getElementById(`glossary-card-${targetGlossaryName}`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        targetCard.classList.add('glow-highlight');
        setTimeout(() => {
          targetCard.classList.remove('glow-highlight');
        }, 2500);
      }
    }
  });

  root.addEventListener('click', (e) => {
    const clearBtn = e.target.closest('#clear-compare-btn');
    if (clearBtn) {
      state.selectedCompareIds = [];
      
      // Uncheck all compare checkboxes in the DOM
      document.querySelectorAll('.compare-checkbox').forEach(cb => cb.checked = false);
      
      renderApp();
    }
  });
}

// Start application when page loads
window.addEventListener('DOMContentLoaded', initializeApp);
