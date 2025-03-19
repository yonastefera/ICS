'use client'

import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import { CaseStudyCard } from '../_components/casestudy/CaseStudyCard'
import {
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Pagination
} from '@mui/material'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import caseStudies from "../../data/case-studies.json"

const uniqueCategories = new Set(
  caseStudies.map((caseStudy) => caseStudy.category)
)
const allCategories = Array.from(uniqueCategories)

export default function Page() {
  const searchParams = useSearchParams()
  const categories = searchParams.getAll('category')

  const filteredCaseStudies = caseStudies.filter((caseStudy) =>
    categories.length === 0 ? true : categories.includes(caseStudy.category)
  )

  return (
    <Container sx={{ my: { xs: 8, md: 16 }, overflow: 'hidden' }}>
      <Grid container spacing={4}>
        <Grid size={12} order={0}>
          <Chip label="Outsourcing"></Chip>
        </Grid>

        <Grid size={{ xs: 12, md: 9 }} order={{ xs: 2, md: 1 }}>
          <Grid container spacing={2}>
            {filteredCaseStudies.map((caseStudy, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={`case-study-${index}`}>
                <CaseStudyCard {...caseStudy} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }} order={{ xs: 1, md: 1 }}>
          <CasteStudyFilter
            categories={allCategories}
            selectedCategories={categories}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 9 }} order={3} sx={{display: 'flex', justifyContent: 'center'}}>
          <Pagination count={10} variant="outlined" color="secondary"  />
        </Grid>
      </Grid>
    </Container>
  )
}

function CasteStudyFilter({
  categories,
  selectedCategories,
}: {
  categories: string[]
  selectedCategories: string[]
}) {
  const router = useRouter()
  const pathname = usePathname()

  const toggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      selectedCategories = selectedCategories.filter(
        (selectedCategory) => selectedCategory !== category
      )
    } else {
      selectedCategories.push(category)
    }

    navigate()
  }

  const navigate = () => {
    const params = new URLSearchParams()
    selectedCategories.forEach((category) => {
      params.append('category', category)
    })

    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <Card variant="outlined">
      <CardHeader
        title={'Filter By Category'}
        slotProps={{
          title: {
            color: 'primary',
            fontWeight: 'medium',
            variant: 'h6',
          },
        }}
      ></CardHeader>
      <CardContent>
        <FormGroup>
          {categories.map((category, index) => (
            <FormControlLabel
              key={`category-${category}`}
              control={<Checkbox onChange={() => toggle(category)} />}
              label={category}
            />
          ))}
        </FormGroup>
      </CardContent>
    </Card>
  )
}
