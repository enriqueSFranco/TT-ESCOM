from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

class CustomPagination(PageNumberPagination):
  def get_paginated_response(self, data):
    return Response({
      'links': {
        'next': self.get_next_link(),
        'previous': self.get_previous_link()
      },
      'pagination': self.page.paginator.count,
      'page_size': self.page.paginator.per_page,
      'page': self.page.start_index(),
      'count': self.page.paginator.count,
      'result': data
    })
