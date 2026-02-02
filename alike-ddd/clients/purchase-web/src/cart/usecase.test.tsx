import React from 'react'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRecommendProducts } from './RecommendProductsPanel'

describe('useRecommendProductsPanel', () => {
  const wrapper = (props: any) => <QueryClientProvider client={new QueryClient()}>{props.children}</QueryClientProvider>

  it('render hook', async () => {
    const { result } = renderHook(() => useRecommendProducts({ input: { keyword: 'hoge' } }), {
      wrapper,
    })

    expect(result.current).toEqual(undefined)

    await waitFor(() => {
      expect(result.current).toMatchObject({
        list: [{ productId: 'normal' }, { productId: 'relate1' }],
        r: 'ListQuerySuccess',
        rt: 'success',
      })
    })
  })
})
