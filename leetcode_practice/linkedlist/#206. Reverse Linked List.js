// Given the head of a singly linked list, reverse the list, and return the reversed list.

var reverseList = function (head) {
  if (!head) {
    return null;
  }
  let prev = head;
  let cur = head.next;
  prev.next = null;

  while (cur != null) {
    let temp = cur;
    cur = cur.next;
    temp.next = prev;
    prev = temp;
  }
  return prev;
};
