
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Service {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  category: 'main' | 'additional';
}

interface ServicesState {
  services: Service[];
  selectedService: Service | null;
}

const initialState: ServicesState = {
  services: [
    {
      id: '1',
      title: 'Інтернет-магазин під ключ',
      description: 'Готове рішення з каталогом товарів, фільтрами, кошиком, інтеграцією платежів і служби доставки. Повний цикл: від проектування UI/UX до запуску на продакшені.',
      originalPrice: 30000,
      discountPrice: 15000,
      category: 'main'
    },
    {
      id: '2',
      title: 'Освітня платформа / Онлайн-курс',
      description: 'Платформа для проведення онлайн-курсів з особистими кабінетами, відеоуроками, тестами та сертифікацією. Вбудована система монетизації та керування контентом.',
      originalPrice: 50000,
      discountPrice: 25000,
      category: 'main'
    },
    {
      id: '3',
      title: 'Landing-page',
      description: 'Односторінковий сайт для презентації продукту чи послуги: яскравий дизайн, адаптивність під мобільні, інтеграція з формою збору лідів.',
      originalPrice: 8000,
      discountPrice: 4000,
      category: 'main'
    },
    {
      id: '4',
      title: 'Корпоративний сайт / Каталог',
      description: 'Сайт для представлення компанії: розділи «Про нас», «Послуги», «Портфоліо», «Прайс» та «Контакти». Легке редагування через CMS.',
      originalPrice: 20000,
      discountPrice: 10000,
      category: 'main'
    },
    {
      id: '5',
      title: 'Портфоліо / Сайт-візитка',
      description: 'Невеликий сайт зі стилем бренду: блок «Про мене», галерея робіт, контактна форма. Ідеально для фрилансерів та малих агенцій.',
      originalPrice: 10000,
      discountPrice: 5000,
      category: 'main'
    },
    {
      id: '6',
      title: 'Медіа-портал / Сервісний сайт',
      description: 'Платформа з редакційною системою: публікація статей, новин, відео, флоти із рекламними блоками. Інтеграція з CRM та API.',
      originalPrice: 40000,
      discountPrice: 20000,
      category: 'main'
    },
    {
      id: '7',
      title: 'Логотип',
      description: 'Розробка логотипу з унікальною ідеєю, адаптивного до всіх носіїв: від візиток до сайту.',
      originalPrice: 5000,
      discountPrice: 2500,
      category: 'additional'
    },
    {
      id: '8',
      title: 'Візитки, буклети, флаєри',
      description: 'Дизайн поліграфії: від макету до готового файлу для друку. Підтримка всіх популярних форматів.',
      originalPrice: 1000,
      discountPrice: 500,
      category: 'additional'
    },
    {
      id: '9',
      title: 'Банери, презентації (дизайн)',
      description: 'Створення банерів для сайтів, соцмереж, а також слайдів-презентацій у PowerPoint/Keynote.',
      originalPrice: 2000,
      discountPrice: 1000,
      category: 'additional'
    },
    {
      id: '10',
      title: 'Редизайн сайту',
      description: 'Повне оновлення візуальної частини та архітектури: адаптивність, оптимізація швидкості, сучасні UI/UX-практики.',
      originalPrice: 20000,
      discountPrice: 10000,
      category: 'additional'
    }
  ],
  selectedService: null,
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    selectService: (state, action: PayloadAction<Service>) => {
      state.selectedService = action.payload;
    },
    clearSelectedService: (state) => {
      state.selectedService = null;
    },
  },
});

export const { selectService, clearSelectedService } = servicesSlice.actions;
export default servicesSlice.reducer;
